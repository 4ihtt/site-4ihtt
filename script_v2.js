const clickSound = new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3');
clickSound.volume = 0.2;

document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        clickSound.currentTime = 0;
        clickSound.play();

        console.log(`Você clicou no link: ${button.textContent.trim()}`);
    });
});
