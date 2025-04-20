document.addEventListener("DOMContentLoaded", () => {
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });
});

window.addEventListener('scroll', function() {
    var navbarItems = document.querySelectorAll('.show-on-scroll');
    navbarItems.forEach(function(item) {
        if (window.scrollY > 100) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
