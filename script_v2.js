// Alerta ao clicar nos bot�es
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Voc� clicou no link: ${button.textContent.trim()}`);
    });
});
