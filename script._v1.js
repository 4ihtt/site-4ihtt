// Animação suave ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("section");
    elementos.forEach(el => {
        el.style.opacity = 0;
        el.style.transition = "all 0.8s ease-out";
        el.style.transform = "translateY(40px)";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => observer.observe(el));
});
