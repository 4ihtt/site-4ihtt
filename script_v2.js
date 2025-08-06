// script_v2.js

// Rolar suavemente para as seções
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Criar botão flutuante de WhatsApp
window.onload = function () {
    const botao = document.createElement("a");
    botao.href = "https://wa.me/SEU_NUMERO";
    botao.className = "zap-float";
    botao.innerHTML = "?? Suporte";

    document.body.appendChild(botao);
};
