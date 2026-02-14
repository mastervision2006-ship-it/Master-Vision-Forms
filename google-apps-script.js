// --- INSTRUÇÕES PARA O GOOGLE APPS SCRIPT ---
// 1. Vá em script.google.com ou na Planilha > Extensões > Apps Script
// 2. Apague todo o código que estiver lá.
// 3. Cole este código abaixo.
// 4. Clique em "Implantar" (Deploy) > "Nova implantação".
// 5. Selecione o tipo "App da Web".
// 6. Descrição: "Captura Leads".
// 7. Executar como: "Eu" (seu email).
// 8. Quem tem acesso: "Qualquer pessoa" (MUITO IMPORTANTE).
// 9. Copie a URL gerada e cole no arquivo script.js do seu site.

function doPost(e) {
  // Pega a aba ativa da planilha
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Lê os dados enviados pelo site (JSON)
  var rawData = e.postData.contents;
  var data = JSON.parse(rawData);
  
  // --- ORDEM DAS COLUNAS (Baseado no seu print) ---
  // Coluna A: NOME
  // Coluna B: EMAIL
  // Coluna C: WHATSAPP
  // Coluna D: DATA
  
  sheet.appendRow([
    data.nome,      // Coluna A
    data.email,     // Coluna B
    data.whatsapp,  // Coluna C
    data.date       // Coluna D
  ]);
  
  // Retorna sucesso para o site
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função para evitar erros se alguém tentar acessar a URL pelo navegador direto
function doGet(e) {
  return ContentService.createTextOutput("O script está funcionando! Configure o método POST no seu site.");
}