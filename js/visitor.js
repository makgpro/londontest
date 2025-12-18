// ============================================
// MOBILE TAP POUR CATEGORY CARDS
// ============================================
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', function(e) {
        if (window.matchMedia('(hover: none)').matches) {
            e.preventDefault();

            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                categoryCards.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
            }
        }
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.category-card')) {
        categoryCards.forEach(c => c.classList.remove('active'));
    }
});
