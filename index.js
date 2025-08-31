const audio = document.getElementById('hinoAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}




audio.volume = volumeSlider.value;


playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️'; 
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️'; 
    }
});



volumeSlider.addEventListener('input', (e) => {
    
    
    audio.volume = e.target.value;
});



audio.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
});


audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});