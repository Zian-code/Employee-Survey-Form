// Handle initial GET request
function doGet(e) {
  return HtmlService.createHtmlOutput('Survey Response Endpoint Active');
}

function doPost(e) {
  try {
    // Log the entire event object
    Logger.log('Full event object: ' + JSON.stringify(e));
    
    // Get the active spreadsheet by ID instead of getActiveSpreadsheet
    const ss = SpreadsheetApp.openById('REPLACE_WITH_YOUR_SPREADSHEET_ID'); // Replace this with your spreadsheet ID
    if (!ss) {
      throw new Error('No spreadsheet found. Please check the spreadsheet ID.');
    }
    Logger.log('Found spreadsheet: ' + ss.getName());
    
    const sheet = ss.getSheets()[0]; // Get the first sheet
    Logger.log('Using sheet: ' + sheet.getName());
    
    // Parse the incoming data
    if (!e.parameter || !e.parameter.payload) {
      throw new Error('No payload received in the request');
    }
    
    let data;
    try {
      data = JSON.parse(e.parameter.payload);
      Logger.log('Successfully parsed data: ' + JSON.stringify(data));
    } catch (parseError) {
      throw new Error('Failed to parse payload: ' + parseError.message);
    }
    
    // Get or create headers
    let headers = [];
    if (sheet.getLastColumn() > 0) {
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      Logger.log('Existing headers: ' + JSON.stringify(headers));
    }
    
    if (headers.length === 0) {
      headers = ['Timestamp', 'Version'].concat(Object.keys(data).filter(key => key !== 'timestamp' && key !== 'version'));
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      Logger.log('Created new headers: ' + JSON.stringify(headers));
    }
    
    // Prepare row data
    const rowData = headers.map(header => {
      if (header === 'Timestamp') return data.timestamp || new Date().toISOString();
      if (header === 'Version') return data.version || 'default';
      return data[header] || '';
    });
    Logger.log('Prepared row data: ' + JSON.stringify(rowData));
    
    // Insert the data
    const lastRow = Math.max(sheet.getLastRow(), 1);
    const range = sheet.getRange(lastRow + 1, 1, 1, rowData.length);
    range.setValues([rowData]);
    Logger.log('Data inserted at row: ' + (lastRow + 1));
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data successfully recorded',
      row: lastRow + 1
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in doPost: ' + error.message);
    Logger.log('Error stack: ' + error.stack);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function createResponsePage(status, message) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_self">
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
          }
          .container {
            text-align: center;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .success { color: #4CAF50; }
          .error { color: #f44336; }
          .icon {
            font-size: 48px;
            margin-bottom: 16px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="icon ${status.toLowerCase()}">
            ${status === 'Success' ? '✅' : '❌'}
          </div>
          <h2 class="${status.toLowerCase()}">${status}</h2>
          <p>${message}</p>
          <p>You can close this window now.</p>
        </div>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html)
    .setTitle('Survey Response Status')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
} 