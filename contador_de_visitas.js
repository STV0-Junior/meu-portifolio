// ========== CONTADOR DE VISITAS COM JSONBIN.IO ==========
const BIN_ID = '69d5910136566621a88bab6c';      // Substitua pelo seu Bin ID
const API_KEY = '$2a$10$mnOBQtgdBqte6dE5yDq1bua3xBUKJSXhJYWqAOzLPCH1b8qFVYyHC';    // Substitua pela sua Master Key

async function updateVisitCounter() {
  const hasVisited = sessionStorage.getItem('hasVisited');
  
  try {
    // Busca o valor atual
    const getResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { 'X-Master-Key': API_KEY }
    });
    const data = await getResponse.json();
    let currentVisits = data.record.visits || 0;
    
    if (!hasVisited) {
      // Incrementa apenas se não visitou nesta sessão
      currentVisits++;
      
      // Atualiza no servidor
      await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY
        },
        body: JSON.stringify({ visits: currentVisits })
      });
      
      sessionStorage.setItem('hasVisited', 'true');
    }
    
    // Exibe o contador
    const counterElement = document.getElementById('visit-counter');
    if (counterElement) counterElement.textContent = currentVisits;
    
  } catch (error) {
    console.error('Erro no contador de visitas:', error);
    // Fallback: mostra um placeholder
    const counterElement = document.getElementById('visit-counter');
    if (counterElement) counterElement.textContent = '?';
  }
}

// Inicializa o contador quando a página carregar
document.addEventListener('DOMContentLoaded', updateVisitCounter);