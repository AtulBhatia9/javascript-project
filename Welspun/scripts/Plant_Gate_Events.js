const shipmentGTWservice = require("./gateways/shipmentGTW.service");
const logger = require("../logger");
const _ = require("lodash");
const type = "Plant";

async function handleFactoryInEvent(plant, payload, token) {
  /**
   * Payload-
   */
  try {
  } catch (error) {
    logger.error(
      `Some error in handling factory in event- ${error.message}`,
      type
    );
  }
}

async function handlePlantInEvent(plant, payload, token) {
  try {
    payload = returnPlantWisePayload(plant, payload);
    let shipmentId = payload.shipmentId;

    let gateEntryNumber = payload?.gateEntryNumber;

    let clientNumber = payload?.clientNumber ?? "";

    let shipment = await shipmentGTWservice.getShipmentById(shipmentId);

    let destinationStage = _.last(shipment.shipmentStages);

    let unloadingTime = payload?.unloadingStartTime;
    if (destinationStage.actualActivityStartTime) {
      logger.info(
        `Shipment- ${shipment.shipmentNumber} already has actualActivityStartTime- ${destinationStage.actualActivityStartTime},----- to update value- ${unloadingTime}`,
        type
      );

      logger.info(`------------------------------------------------`, type);

      //TODO: Will update if timing already present?
      return {
        shipmentId: shipmentId,
        gateEntryNumber: gateEntryNumber,
        clientNumber: clientNumber,
        plantGateIn: destinationStage.actualActivityStartTime,
      };
    }

    if (!destinationStage.gateInTime) {
      logger.info(
        `Gate in timing not yet done, will not let add actualActivityStartTime`,
        type
      );

      return throwErr(
        `Gross weight not done yet for shipment- ${shipment.uuid} !`
      );
    }

    if (!unloadingTime) {
      return throwErr("Please provide Plant Gate In Details in payload!");
    }

    let bulkSync_Payload = {
      shipmentId: shipmentId,
      updates: [
        {
          keyToUpdate: "actualActivityStartTime",
          stageId: destinationStage.uuid,
          updatedValue: unloadingTime,
        },
      ],
    };

    shipment = await shipmentGTWservice.bulkSyncApi(bulkSync_Payload, token);

    logger.info(
      `Updated shipment - ${shipment.shipmentNumber}, updated Timings- ${
        _.last(shipment.shipmentStages).actualActivityStartTime
      }`,
      type
    );

    logger.info(`------------------------------------------------`, type);

    return {
      shipmentId: shipmentId,
      gateEntryNumber: gateEntryNumber,
      clientNumber: clientNumber,
      plantGateIn: unloadingTime,
    };
  } catch (error) {
    logger.error(
      `Some error in handling Plant In event - ${error.message}`,
      type
    );

    return throwErr(err.message);
  }
}

async function handleTareWeightEvent(plant, payload, token) {
  try {
    payload = returnPlantWisePayload(plant, payload);
    let shipmentId = payload.shipmentId;

    let gateEntryNumber = payload?.gateEntryNumber;

    let clientNumber = payload?.clientNumber ?? "";

    let tareWeight = payload?.tareWeight ?? "";

    let diffNetWeight = payload?.diffNetWeight ?? "";

    let shipment = await shipmentGTWservice.getShipmentById(shipmentId);

    let destinationStage = _.last(shipment.shipmentStages);

    let unloadingGateTareTime = payload?.unloadingGateOutTime;

    if (destinationStage.gateOutTime) {
      logger.info(
        `Shipment- ${shipment.shipmentNumber} already has gateInTime- ${destinationStage.gateOutTime},----- to update value- ${unloadingGateTareTime}`,
        type
      );

      logger.info(`------------------------------------------------`, type);

      // TODO: Will update if timing already present?
      return {
        shipmentId: shipmentId,
        gateEntryNumber: gateEntryNumber,
        clientNumber: clientNumber,
        diffNetWeight: diffNetWeight,
        tareWeight: tareWeight,
        tareWeightTime: destinationStage.gateOutTime,
      };
    }

    if (!unloadingGateTareTime) {
      return throwErr("Please provide Tare weight date and time in payload!");
    }

    let cfToUpdate = [];

    let existingCf = shipment?.customFields ?? [];

    let isTareWeightPresent = existingCf.find(field => field.fieldKey === "Tare Weight");
    let isGateEntryNumberPresent = existingCf.find(field => field.fieldKey === "Gate Entry Number");
    let isClientNumberPresent = existingCf.find(field => field.fieldKey === "Client Number");
    let isDiffNetWeightPresent = existingCf.find(field => field.fieldKey === "Diff. Net Weight (Port to Welspun)");
    let isTareWeightDatePresent = existingCf.find(field => field.fieldKey === "Tare Weight Date");
    let isTareWeightTimePresent = existingCf.find(field => field.fieldKey === "Tare Weight Time");

    if (!isTareWeightPresent) {
      cfToUpdate.push({
        fieldKey: "Tare Weight",
        valueType: "string",
        fieldType: "text",
        value: tareWeight,
      });
    }

    if (!isGateEntryNumberPresent) {
      cfToUpdate.push({
        fieldKey: "Gate Entry Number",
        valueType: "string",
        fieldType: "text",
        value: gateEntryNumber,
      });
    }

    if (!isClientNumberPresent) {
      cfToUpdate.push({
        fieldKey: "Client Number",
        valueType: "string",
        fieldType: "text",
        value: clientNumber,
      });
    }

    if (!isDiffNetWeightPresent) {
      cfToUpdate.push({
        fieldKey: "Diff. Net Weight (Port to Welspun)",
        valueType: "string",
        fieldType: "text",
        value: diffNetWeight,
      });
    }

    if (!isTareWeightDatePresent) {
      cfToUpdate.push({
        fieldKey: "Tare Weight Date",
        valueType: "string",
        fieldType: "text",
        value: payload.tareWeightDate,
      });
    }

    if (!isTareWeightTimePresent) {
      cfToUpdate.push({
        fieldKey: "Tare Weight Time",
        valueType: "string",
        fieldType: "text",
        value: payload.tareWeightTime,
      });
    }

    let bulkSync_Payload = {
      shipmentId: shipmentId,
      updates: [
        {
          keyToUpdate: "gateOutTime",
          stageId: destinationStage.uuid,
          updatedValue: unloadingGateTareTime,
        },
      ],
    };

    if (cfToUpdate.length > 0) {
      bulkSync_Payload.updates.push({
        keyToUpdate: "customFields",
        updatedValue: cfToUpdate,
      });
    }

    shipment = await shipmentGTWservice.bulkSyncApi(bulkSync_Payload, token);

    logger.info(
      `Updated shipment - ${shipment.shipmentNumber}, updated Timings- ${_.last(shipment.shipmentStages).gateOutTime}`,
      type
    );

    logger.info(`------------------------------------------------`, type);

    return {
      shipmentId: shipmentId,
      gateEntryNumber: gateEntryNumber,
      clientNumber: clientNumber,
      diffNetWeight: diffNetWeight,
      tareWeight: tareWeight,
      tareWeightTime: unloadingGateTareTime,
    };
  } catch (error) {
    logger.error(`Some error in handling Tare Weight event - ${error.message}`, type);

    return throwErr(err.message);
  }
}

async function handleGrossWeightEvent(plant, payload, token) {
  try {
    payload = returnPlantWisePayload(plant, payload);
    let shipmentId = payload.shipmentId;

    let gateEntryNumber = payload?.gateEntryNumber;

    let clientNumber = payload?.clientNumber ?? "";

    let grossWeight = payload?.grossWeight ?? "";

    let shipment = await shipmentGTWservice.getShipmentById(shipmentId);

    let destinationStage = _.last(shipment.shipmentStages);

    let unloadingGateTime = payload?.unloadingGateInTime;

    if (destinationStage.gateInTime) {
      logger.info(
        `Shipment- ${shipment.shipmentNumber} already has gateInTime- ${destinationStage.gateInTime},----- to update value- ${unloadingGateTime}`,
        type
      );

      logger.info(`------------------------------------------------`, type);

      // TODO: Will update if timing already present?
      return {
        shipmentId: shipmentId,
        gateEntryNumber: gateEntryNumber,
        clientNumber: clientNumber,
        grossWeight: grossWeight,
        grossWeightTime: destinationStage.gateInTime,
      };
    }

    if (!unloadingGateTime) {
      return throwErr("Please provide Gross weight date and time in payload!");
    }

    let cfToUpdate = [];

    let existingCf = shipment?.customFields ?? [];

    let isGrossWeightPresent = existingCf.find(field => field.fieldKey === "Gross Weight");
    let isGrossWeightDatePresent = existingCf.find(field => field.fieldKey === "Gross Weight Date");
    let isGrossWeightTimePresent = existingCf.find(field => field.fieldKey === "Gross Weight Time");
    let isGateEntryNumberPresent = existingCf.find(field => field.fieldKey === "Gate Entry Number");
    let isClientNumberPresent = existingCf.find(field => field.fieldKey === "Client Number");

    if (!isGrossWeightPresent) {
      cfToUpdate.push({
        fieldKey: "Gross Weight",
        valueType: "string",
        fieldType: "text",
        value: grossWeight,
      });
    }

    if (!isGrossWeightDatePresent) {
      cfToUpdate.push({
        fieldKey: "Gross Weight Date",
        valueType: "string",
        fieldType: "text",
        value: payload.grossWeightDate,
      });
    }

    if (!isGrossWeightTimePresent) {
      cfToUpdate.push({
        fieldKey: "Gross Weight Time",
        valueType: "string",
        fieldType: "text",
        value: payload.grossWeightTime,
      });
    }

    if (!isGateEntryNumberPresent) {
      cfToUpdate.push({
        fieldKey: "Gate Entry Number",
        valueType: "string",
        fieldType: "text",
        value: gateEntryNumber,
      });
    }

    if (!isClientNumberPresent) {
      cfToUpdate.push({
        fieldKey: "Client Number",
        valueType: "string",
        fieldType: "text",
        value: clientNumber,
      });
    }

    let bulkSync_Payload = {
      shipmentId: shipmentId,
      updates: [
        {
          keyToUpdate: "gateInTime",
          stageId: destinationStage.uuid,
          updatedValue: unloadingGateTime,
        },
      ],
    };

    if (cfToUpdate.length > 0) {
      bulkSync_Payload.updates.push({
        keyToUpdate: "customFields",
        updatedValue: cfToUpdate,
      });
    }

    shipment = await shipmentGTWservice.bulkSyncApi(bulkSync_Payload, token);

    logger.info(
      `Updated shipment - ${shipment.shipmentNumber}, updated Timings- ${
        _.last(shipment.shipmentStages).gateInTime
      }`,
      type
    );

    logger.info(`------------------------------------------------`, type);

    return {
      shipmentId: shipmentId,
      gateEntryNumber: gateEntryNumber,
      clientNumber: clientNumber,
      grossWeight: grossWeight,
      grossWeightTime: unloadingGateTime,
    };
  } catch (error) {
    logger.error(
      `Some error in handling Gross Weight event - ${error.message}`,
      type
    );

    return throwErr(err.message);
  }
}


async function handlePlantOutEvent(plant, payload, token) {
  try {
    payload = returnPlantWisePayload(plant, payload);
    let shipmentId = payload.shipmentId;

    let gateEntryNumber = payload?.gateEntryNumber;

    let clientNumber = payload?.clientNumber ?? "";

    let shipment = await shipmentGTWservice.getShipmentById(shipmentId);

    let destinationStage = _.last(shipment.shipmentStages);

    let unloadingTime = payload.unloadingEndTime;
    if (destinationStage.actualActivityEndTime) {
      logger.info(
        `Shipment already has actualActivityEndTime- ${destinationStage.actualActivityEndTime},----- to update value- ${unloadingTime}`,
        type
      );

      logger.info(`------------------------------------------------`, type);

      //TODO: Will update if timing already present?
      return {
        shipmentId: shipmentId,
        gateEntryNumber: gateEntryNumber,
        clientNumber: clientNumber,
        plantGateIn: destinationStage.actualActivityEndTime,
      };
    }

    if (!destinationStage.actualActivityStartTime) {
      logger.info(
        `Plant In not yet done, will not proceed to add actualActivityEndTime`,
        type
      );
    }

    let bulkSync_Payload = {
      shipmentId: shipmentId,
      updates: [
        {
          keyToUpdate: "actualActivityEndTime",
          stageId: destinationStage.uuid,
          updatedValue: unloadingTime,
        },
      ],
    };

    shipment = await shipmentGTWservice.bulkSyncApi(bulkSync_Payload, token);

    logger.info(`------------------------------------------------`, type);

    return {
      shipmentId: shipmentId,
      gateEntryNumber: gateEntryNumber,
      clientNumber: clientNumber,
      plantGateIn: unloadingTime,
    };
  } catch (error) {
    logger.error(
      `Some error in handling Plant Out event - ${error.message}`,
      type
    );

    return throwErr(err.message);
  }
}

async function handleFactoryOutEvent(plant, payload, token) {
  try {
  } catch (error) {
    logger.error(`Some error in handling factory out event - ${error.message}`);
  }
}

function throwErr(errMsg) {
  throw new Error(errMsg);
}

function returnPlantWisePayload(plant, payload) {
  let shipmentId = payload["SHIPMENT ID"];

  if (!shipmentId) return throwErr("Please provide shipment Id in payload!");

  let gateEntryNumber = payload["GATEENTRYNO"];

  let plantGateInDate = payload["PLANT_GATEIN_DATE"];

  let plantGateOutDate = payload["PLANT_GATEOUT_DATE"];

  let plantGateOutTime = payload["PLANT_GATEOUT_TIME"];

  let plantGateInTime = payload["PLANT_GATEIN_TIME"];

  let gateInTime = payload["GATEIN_TIME"];

  let gateInDate = payload["GATEIN_DATE"];

  let gateOutDate = payload["GATEOUT_DATE"];

  let gateOutTime = payload["GATEOUT_TIME"];

  let unloadingGateInTime = `${gateInDate} ${gateInTime}`;

  let unloadingGateOutTime = `${gateOutDate} ${gateOutTime}`;

  let unloadingStartTime = `${plantGateInDate} ${plantGateInTime}`;

  let unloadingFinishTime = `${plantGateOutDate} ${plantGateOutTime}`;

  let clientNumber = payload[""];
  return plantPayloadMapper(
    shipmentId,
    unloadingGateInTime,
    unloadingGateOutTime,
    unloadingStartTime,
    unloadingFinishTime,
    gateEntryNumber,
    clientNumber
  );

  //   switch (plant) {
  //     case "107":
  //       let shipmentId = payload["SHIPMENT ID"];

  //       if (!shipmentId)
  //         return throwErr("Please provide shipment Id in payload!");

  //       let gateEntryNumber = payload["GATEENTRYNO"];

  //       let plantGateInDate = payload["PLANT_GATEIN_DATE"];

  //       let plantGateOutDate = payload["PLANT_GATEOUT_DATE"];

  //       let plantGateOutTime = payload["PLANT_GATEOUT_TIME"];

  //       let plantGateInTime = payload["PLANT_GATEIN_TIME"];

  //       let unloadingStartTime = `${plantGateInDate} ${plantGateInTime}`;

  //       let unloadingFinishTime = `${plantGateOutDate} ${plantGateOutTime}`;

  //       let clientNumber = payload[""];
  //       return plantPayloadMapper(
  //         shipmentId,
  //         unloadingStartTime,
  //         unloadingFinishTime,
  //         gateEntryNumber,
  //         clientNumber
  //       );
  //     case "360":
  //       return plantPayloadMapper();
  //     case "650":
  //       return plantPayloadMapper();
  //     default:
  //       logger.error(`Plant - ${plant} not found in list!`);
  //       return {};
  //   }
}

function plantPayloadMapper(
  shipmentId,
  unloadingGateInTime,
  unloadingGateOutTime,
  unloadingStartTime,
  unloadingEndTime,
  gateEntryNumber,
  clientNumber
) {
  var payload = {};

  if (shipmentId) payload["shipmentId"] = shipmentId;

  if (unloadingGateInTime)
    payload["unloadingGateInTime"] = convertTimeToEpoch(unloadingGateInTime);

  if (unloadingGateOutTime)
    payload["unloadingGateOutTime"] = convertTimeToEpoch(unloadingGateOutTime);

  if (unloadingStartTime)
    payload["unloadingStartTime"] = convertTimeToEpoch(unloadingStartTime);

  if (unloadingEndTime)
    payload["unloadingEndTime"] = convertTimeToEpoch(unloadingEndTime);

  if (gateEntryNumber) payload["gateEntryNumber"] = gateEntryNumber;

  if (clientNumber) payload["clientNumber"] = clientNumber;

  return payload;
}

function convertTimeToEpoch(date, time) {
  try {
    let epoch = new Date(`${date} ${time}`).valueOf();

    if (String(epoch) !== "NaN") {
      return epoch;
    } else {
      logger.log(
        `Some error parsing date for date- ${date}, time- ${time}`,
        type
      );
    }
  } catch (error) {
    logger.log(
      `Some error in converting time to epoch - ${error.message}`,
      type
    );
  }

  return null;
}


function getValueForCf(sh, key) {
  let shCfs = sh.customFields;
  let reqCf = shCfs.find((it) => it.fieldKey == key);
  return reqCf ? reqCf.value : "";
}

module.exports = {
  handleFactoryInEvent: handleFactoryInEvent,
  handlePlantInEvent: handlePlantInEvent,
  handlePlantOutEvent: handlePlantOutEvent,
  handleTareWeightEvent: handleTareWeightEvent,
  handleGrossWeightEvent: handleGrossWeightEvent,
  handleFactoryOutEvent: handleFactoryOutEvent,
};
