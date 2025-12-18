// ============================================
// MAGNETIC BUTTONS
// ============================================
const magneticBtns = document.querySelectorAll('.cta-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// CMS CONTENT LOADING
// ============================================
fetch('/content/homepage.json')
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(key => {
            const element = document.querySelector(`[data-cms="${key}"]`);
            if (element) {
                element.textContent = data[key];
            }
        });
    })
    .catch(err => console.log('Contenu par défaut'));
