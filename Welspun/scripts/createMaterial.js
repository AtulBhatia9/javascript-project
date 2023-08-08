const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODkzMzUyMDgsInVzZXJJZCI6ImViZTU3NTFhLWEwNWItNDZiNi05MWI0LTFjMTEyYTkwZjYzOCIsImVtYWlsIjoic3V5YXNoLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTU1NTEwNzcwMCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlN1eWFzaCAiLCJvcmdUeXBlIjoiRkxFRVRfT1dORVIiLCJpc0dvZCI6dHJ1ZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.9GbhC9XG2uSsDAQLSxphHsSVEz8VXUQfZUzqBxlNgjk";

function main() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  const lastRow = sheet.getLastRow();
  const startRow = 9;

  const nameValues = sheet.getRange("E" + startRow + ":E" + lastRow).getValues();
  const materialDescriptionValues = sheet.getRange("E" + startRow + ":E" + lastRow).getValues();
  const taxCodeValues = sheet.getRange("H" + startRow + ":H" + lastRow).getValues();

  for (let i = 0; i < nameValues.length; i++) {
    const name = nameValues[i][0] || "";
    const materialDescription = materialDescriptionValues[i][0] || "";
    const taxCode = taxCodeValues[i][0] || "";

    const payload = {
      name: name,
      materialDescription: materialDescription,
      taxCode: taxCode,
      unitOfMeasurement: "Metric Tonnes",
      measurementType: "weight",
      pricePerUnit: null,
      measuredQuantity: null,
      materialGroup: null
    };

    createMaterial(payload);
    break;
  }
}


function createMaterial(payload) {
  try {
    const url = "https://apis.fretron.com/materials/v1/material/v2";
    const options = {
      "muteHttpExceptions": true,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      payload: JSON.stringify(payload),
    };

    const res = UrlFetchApp.fetch(url, options).getContentText();
    console.log(res);
  } catch (error) {
    console.log(`Error in creating material: ${error.message}`);
  }
}
