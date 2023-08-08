const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTAxODA3ODYsInVzZXJJZCI6ImJvdHVzZXItLTJlMTg2NDBmLTcxOGMtNGU0ZC1hNDdlLWQxMjBiZmIxNzE0ZiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTJlMTg2NDBmLTcxOGMtNGU0ZC1hNDdlLWQxMjBiZmIxNzE0ZiIsIm9yZ0lkIjoiMGJiZGMxMjItZjk2My00NTJmLTlhZjEtMjg3MTVmNWUzNmIyIiwibmFtZSI6InN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.CKMLrpNzCb-Lev7YM_wSFpGMs5osTLwzangKW_goN0Y"
async function getShipments(from, till) {
    try {
        let filters = { "shipmentDate": { "isTillExpression": false, "isFromExpression": false, "from": from, "till": till }, "__version": 2 }
        let allFields = ["consignments", "branch", "shipmentNumber", "shipmentStatus", "fleetInfo"]
        let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/v1?filters=${encodeURIComponent(JSON.stringify(filters))}&allFields=${encodeURIComponent(JSON.stringify(allFields))}&size=800`
        console.log(JSON.stringify(url))
        let res = await rp({
            uri: url,
            method: 'GET',
            json: true,
            headers: {
                authorization: TOKEN
            }
        })
        return res?.length ? res : []
    } catch (e) {
        console.log(`Error getting Shipment ${e.message}`)
    }
    return []

}

async function getVendorBillByBranch(branch) {
    try {
        let filters = { "billingBranchName": [branch] }
        let url = `${FRT_PUB_BASE_URL}/shipment-view/vendor-bill/v1/vendor-bills?filters=${encodeURIComponent(JSON.stringify(filters))}`
        let res = await rp({
            uri: url,
            method: 'GET',
            json: true,
            headers: {
                Authorization: TOKEN
            }
        })
        // console.log(res)
        return res.length ? res : []
    } catch (e) {
        console.log(`Error getting vendor bill by branch ${e.message}`)
    }
    return []
}



function getLastDayEpoch() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let till = new Date(currentDate);
    till.setDate(currentDate.getDate() - 1);
    till = till.setHours(23, 59, 59, 999)
    let startOfLastDay = new Date(currentDate);
    startOfLastDay.setDate(currentDate.getDate() - 1);

    let startTimestamp = startOfLastDay.getTime();
    return {
        from: startTimestamp,
        till: till
    }
}

async function JsonToExcelEmail(jsonArr, emails, subject, content, orgId, html = false) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: emails[0],
            cc: emails.slice(1),
            subject: subject,
            content: content,
        },
        orgId: orgId,
    };
    if (html) {
        payload.emailInfo.html = html
    }
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            body: payload,
            json: true,

        });

        console.log(`Sending Json to Excel email api res status : ${res.status}`);

        if (res.status === 200) {
            console.log(res.data);
            return "Email sent successfully"
        } else {
            console.log(`Sending Json to Excel email api res error : ${res.error}`);
        }

    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
    return "Some error in sending email"
}
async function generateReport(from, till, isMail) {
    try {
        console.log(`From ${from} Till ${till}`)
        let shs = await getShipments(from, till)
        let json = []
        let branchesData = []
        console.log(`shipment Length ${shs.length}`)

        for (let sh of shs) {
            let shNo = sh.shipmentNumber
            let branch = sh?.branch?.name ?? ""
            let shipmentStatus = sh?.shipmentStatus
            let podPendingCount = 0
            let podSubmittedCount = 0
            let completedShSubmittedPodCount = 0
            let trackingMode = sh?.fleetInfo?.trackingMode ?? ""
            let lbsNo = sh?.fleetInfo?.lbsNumber
            let completedSh = 0
            // console.log(`TrackingMode ${trackingMode}`)
            let trackingManual = 0
            let trackingVTS_LBS = 0
            if (shipmentStatus == "Completed") {
                completedSh += 1
            }
            if (trackingMode == "VTS-LBS" || (trackingMode == "MANUAL" && lbsNo != null)) {
                trackingVTS_LBS += 1
            } else {
                if (trackingMode == "MANUAL") {
                    trackingManual += 1
                }
            }

            let cns = sh?.consignments
            if (cns?.length) {
                for (let cn of cns) {
                    let podStatus = cn?.pod?.status ?? ""
                    if (podStatus == "PENDING") {
                        podPendingCount += 1
                    }
                    if (podStatus == "SUBMITTED" || podStatus == "RECIEVED") {
                        podSubmittedCount += 1
                    }

                    if (shipmentStatus == "Completed") {
                        if (podStatus == "SUBMITTED" || podStatus == "RECIEVED") {
                            completedShSubmittedPodCount += 1
                        }
                    }
                }
            }

            branchesData.push({
                shNo: shNo,
                branch: branch ? branch : "UNKNOWN BRANCH",
                podPendingCount: podPendingCount,
                podSubmittedCount: podSubmittedCount,
                trackingManual: trackingManual,
                trackingVTS_LBS: trackingVTS_LBS,
                completedShSubmittedPodCount: completedShSubmittedPodCount,
                completedSh: completedSh
            })

        }

        let result = [];
        let branchCount = {};

        branchesData.forEach(item => {
            let branch = item.branch;
            if (!branchCount[branch]) {
                branchCount[branch] = 1;
            } else {
                branchCount[branch] += 1;
            }
        });

        for (let branch in branchCount) {
            let obj = {
                branch: branch,
                count: branchCount[branch],
                podPendingCount: 0,
                trackingManualCount: 0,
                trackingVTS_LBS_Count: 0,
                completedSh: 0,
                podSubmittedCount: 0,
                completedShSubmittedPodCount: 0
            };
            branchesData.forEach(item => {
                if (item.branch === branch) {
                    obj.podPendingCount += item.podPendingCount;
                    obj.trackingManualCount += item.trackingManual;
                    obj.trackingVTS_LBS_Count += item.trackingVTS_LBS;
                    obj.completedSh += item.completedSh;
                    obj.podSubmittedCount += item.podSubmittedCount
                    obj.completedShSubmittedPodCount += item.completedShSubmittedPodCount
                }
            });
            result.push(obj);
        }

        for (let item of result) {
            let branchName = item.branch
            let branchCount = item.count
            let podPendingCount = item.podPendingCount
            let trackingManualCount = item.trackingManualCount
            let trackingVTS_LBS_Count = item.trackingVTS_LBS_Count
            let podSubmittedCount = item.podSubmittedCount
            let completedSh = item.completedSh
            let completedShSubmittedPodCount = item.completedShSubmittedPodCount
            let notBilled = 0

            let vendorBills = await getVendorBillByBranch(branchName)
            let totalInvoiceCreated = vendorBills?.length ?? ""
            let pendingInvoices = 0
            let billedInvoices = 0
            let paidInvoices = 0
            if (totalInvoiceCreated) {
                vendorBills.map((v) => {
                    if (v.billingStatus === "PENDING" || v.billingStatus === "APPROVAL_PENDING") {
                        pendingInvoices += 1
                        return true
                    }
                }
                )
                // console.log(`pendingInvoices ${pendingInvoices}`)

                vendorBills.map((v) => {
                    if (v.billingStatus === "BILLED") {
                        billedInvoices += 1
                    }
                })

                vendorBills.map((v) => {
                    if (v.billingStatus === "PAID" || v.billingStatus === "PARTIAL_PAID") {
                        paidInvoices += 1
                    }
                })
                // console.log(`paidInvoices ${paidInvoices}`)

            }
            if (completedShSubmittedPodCount && !totalInvoiceCreated) {
                notBilled += 1
            }
            let jsonObj = {
                "Dispatch Location": branchName,
                "Vehicle Placement Count": branchCount,
                "Manual Tracking Count": trackingManualCount,
                "SIM Tracking Count": trackingVTS_LBS_Count,
                "Pending POD": podPendingCount,
                "POD submitted": podSubmittedCount,
                "Shipment Delivered": completedSh,
                "Invoice Created": totalInvoiceCreated,
                "Pending invoice": pendingInvoices,
                "Invoices Approved": billedInvoices,
                "Invoices Paid/Partial Paid": paidInvoices,
                "Delivered but Not Billed Invoice": notBilled
            }
            json.push(jsonObj)
        }
        if (isMail) {
            let orgId = "0bbdc122-f963-452f-9af1-28715f5e36b2"
            let subject = "Daily Invoice Creation vs Placement "
            let content = `Dear Sir
            Please Find Below Details`
            await JsonToExcelEmail(json, ["pooja.bishu@fretron.com"], subject, content, orgId)
        }
        return json
    } catch (e) {
        console.log(`Error Main: ${e.message}`)
    }
}






async function main(event) {
    try {
        let jsonArr = []
        let from = event.query.from
        let till = event.query.till
        if (from && till) {
            console.log(`custom Report Api Call`)
            jsonArr = await generateReport(from, till, false)
        }
        else {
            let lastDayEpoch = getLastDayEpoch()
            let fromLastDay = lastDayEpoch.from
            let tillLastDay = lastDayEpoch.till
            console.log(fromLastDay, tillLastDay)
            console.log(`Mail send Api Call`)
            jsonArr = await generateReport(fromLastDay, tillLastDay, true)
        }

        console.log("Total Records: " + jsonArr?.length);
        return rq({
            method: "POST",
            uri: `${FRT_PUB_BASE_URL}/shipment-view/shipment/v1/json-to-xlsx/download`,
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonArr,
            json: true,
        }).pipe(_httpRes);
    } catch (e) {
        console.log(`Main catching ${e.message}`)
    }

}


try {
    return await main(event)
} catch (e) {
    console.log(`Error in main ${e.message}`)
}