function doPost(e) {
  // Open the target spreadsheet by ID
  var ss = SpreadsheetApp.openById('1bgDJRNkvhI0zLYQt4OG4JCUBYChPfKvZJfflytDCGxA');
  var responseSheet = ss.getSheetByName('Sheet1');
  var tokensSheet = ss.getSheetByName('Tokens');

  // Parse incoming data
  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput('Invalid JSON');
  }

  // Validate token and get department
  var token = data.token;
  var tokenData = findToken(tokensSheet, token);
  
  if (!tokenData) {
    return ContentService.createTextOutput('Invalid token').setMimeType(ContentService.MimeType.TEXT);
  }

  // Get headers from first row
  var headers = responseSheet.getRange(1, 1, 1, responseSheet.getLastColumn()).getValues()[0];

  // Prepare row: Timestamp, Token, Department, then answers
  var row = [new Date(), token, tokenData.department];

  // Answers mapping
  var answers = data.answers || {};
  
  // Add answers in the order of questions (starting from column 4, after Timestamp, Token, and Department)
  for (var i = 3; i < headers.length; i++) {
    var key = headers[i];
    row.push(answers.hasOwnProperty(key) ? answers[key] : "");
  }

  responseSheet.appendRow(row);

  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}

function findToken(sheet, tokenToFind) {
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var tokenCol = headers.indexOf('Token');
  var deptCol = headers.indexOf('Department');
  
  if (tokenCol === -1 || deptCol === -1) {
    return null;
  }

  for (var i = 1; i < data.length; i++) {
    if (data[i][tokenCol] === tokenToFind) {
      return {
        department: data[i][deptCol]
      };
    }
  }
  
  return null;
} 