function copiarPix() {
    const chave = document.getElementById("chave-pix").innerText;
    navigator.clipboard.writeText(chave);
    alert("Chave PIX copiada!");
}

function abrirModal() {
    document.getElementById("pagamentoModal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("pagamentoModal").style.display = "none";
}

document.querySelector(".formulario")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert("? Pagamento confirmado!\n\nAgora envie o comprovante no WhatsApp para ativarmos o XITER.");
    const msg = encodeURIComponent(`Olá! Acabei de fazer o pagamento do XITER.\nMeu e-mail: ${email}\nSegue o comprovante:`);
    window.open(`https://wa.me/13652556933?text=${msg}`, "_blank");
    fecharModal();
});
