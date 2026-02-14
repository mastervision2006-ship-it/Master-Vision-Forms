// --- INSTRUÇÕES CRÍTICAS ---
// 1. Cole este código no editor do Apps Script.
// 2. Clique em "Implantar" > "Gerenciar Implantações" > "Editar" (lápis) > "Nova Versão".
// 3. Garanta que "Quem tem acesso" esteja marcado como "QUALQUER PESSOA" (Anyone).
// 4. Copie a URL da Web App e verifique se bate com a do arquivo script.js.

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data;
    
    // Tenta ler como JSON (padrão do nosso site)
    try {
        data = JSON.parse(e.postData.contents);
    } catch(err) {
        // Fallback: Se falhar o JSON, tenta ler parâmetros normais
        data = e.parameter;
    }

    // Se não tiver data de envio, cria uma agora
    var dateParams = data.date || new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

    // --- ORDEM DAS COLUNAS NA PLANILHA ---
    // Coluna A: Nome
    // Coluna B: Email
    // Coluna C: WhatsApp
    // Coluna D: Data/Hora
    sheet.appendRow([
      data.nome || "Nome não informado",
      data.email || "Email não informado",
      data.whatsapp || "Whats não informado",
      dateParams
    ]);
    
    // Retorna sucesso em JSON
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retorna erro em JSON (útil para debug se rodar direto no navegador)
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  // Útil para testar se a URL está correta abrindo no navegador
  return ContentService.createTextOutput("Conexão estabelecida! O script está pronto para receber dados via POST.");
}