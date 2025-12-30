const header = document.querySelector('.header');
const modal = document.getElementById('trailer-modal');
const playerContainer = document.getElementById('player-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('black');
    } else {
        header.classList.remove('black');
    }
});

// Trailer Logic
function playTrailer(videoId) {
    if (!videoId) return;
    
    // Embed YouTube iframe with autoplay
    const iframe = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    playerContainer.innerHTML = iframe;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeTrailer() {
    modal.style.display = 'none';
    playerContainer.innerHTML = ''; // Stop video
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Attach event listeners to all movie cards with data-trailer
document.querySelectorAll('.movie-card[data-trailer]').forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('data-trailer');
        playTrailer(videoId);
    });
});

// Close modal when clicking outside content (handled by onclick on overlay)
// Also close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeTrailer();
    }
});
