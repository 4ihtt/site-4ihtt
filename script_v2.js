// Alerta ao clicar nos botões
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Você clicou no link: ${button.textContent.trim()}`);
    });
});
