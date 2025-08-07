function abrirModal() {
    document.getElementById("pagamentoModal").classList.add("active");
}

function fecharModal() {
    document.getElementById("pagamentoModal").classList.remove("active");
}

function copiarPix() {
    const chavePix = document.getElementById("chave-pix").textContent;
    navigator.clipboard.writeText(chavePix)
        .then(() => alert("Chave PIX copiada para a área de transferência!"))
        .catch(() => alert("Falha ao copiar a chave PIX. Copie manualmente."));
}

function atualizarChavePix() {
    const select = document.getElementById("produtoSelect");
    const chavePix = document.getElementById("chave-pix");
    const qrCode = document.getElementById("qr-code");

    const chaveSelecionada = select.value;
    chavePix.textContent = chaveSelecionada;
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(chaveSelecionada)}&size=160x160`;
}

function confirmarPagamento(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!email) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    const select = document.getElementById("produtoSelect");
    const produtoNome = select.options[select.selectedIndex].text;

    alert("Obrigado pelo pagamento! Agora envie seu comprovante pelo WhatsApp.");

    const mensagem = encodeURIComponent(
        `Olá, já realizei o pagamento do produto: ${produtoNome}.\nSegue o comprovante para liberar o acesso.\nMeu e-mail: ${email}`
    );

    const numeroWhats = "13652556933";
    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");

    fecharModal();
}
