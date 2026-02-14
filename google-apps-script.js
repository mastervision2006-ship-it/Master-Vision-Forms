// 1. Go to script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Click 'Deploy' -> 'New Deployment'
// 5. Select type 'Web app'
// 6. Set Description: 'Lead Capture'
// 7. Execute as: 'Me'
// 8. Who has access: 'Anyone' (IMPORTANT!)
// 9. Copy the Web App URL and paste it into FormSection.tsx const SCRIPT_URL

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Parse incoming JSON data
  var data = JSON.parse(e.postData.contents);
  
  // Append row: Timestamp, Name, Email, WhatsApp
  sheet.appendRow([new Date(), data.nome, data.email, data.whatsapp]);
  
  // Return success result
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle CORS (preflight requests) if you use standard fetch without no-cors mode, 
// though simplified setup usually relies on no-cors for this specific setup.
function doGet(e) {
  return ContentService.createTextOutput("Method GET not allowed");
}