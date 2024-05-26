function startGame() {
    // Redireciona para a página index.html
    window.location.href = 'index.html';
}

function showRules() {
    document.getElementById("rules-modal").style.display = "flex";
}

function closeRules() {
    document.getElementById("rules-modal").style.display = "none";
}

// Fechar o modal quando o usuário clicar fora do modal
window.onclick = function(event) {
    let modal = document.getElementById("rules-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
