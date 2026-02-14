// --- INSTRUÇÕES PARA O GOOGLE APPS SCRIPT ---
// 1. Vá em script.google.com ou na Planilha > Extensões > Apps Script
// 2. Apague todo o código que estiver lá.
// 3. Cole este código abaixo.
// 4. Clique em "Implantar" (Deploy) > "Nova implantação" (OU Gerenciar Implantações > Editar > Nova Versão).
// 5. Selecione o tipo "App da Web".
// 6. Descrição: "Captura Leads v2".
// 7. Executar como: "Eu" (seu email).
// 8. Quem tem acesso: "Qualquer pessoa" (MUITO IMPORTANTE).
// 9. Se a URL mudar, atualize no arquivo script.js. Se editar a implantação existente, a URL mantém.

function doPost(e) {
  // LockService impede que dois envios simultâneos buguem a planilha
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Lê os dados enviados pelo site
    // O site envia como text/plain para evitar erro de CORS, mas é um JSON string
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    
    // --- ORDEM DAS COLUNAS ---
    // A: NOME | B: EMAIL | C: WHATSAPP | D: DATA
    sheet.appendRow([
      data.nome,
      data.email,
      data.whatsapp,
      data.date
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput("O script está ativo e funcionando (v2).");
}