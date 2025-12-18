// ============================================
// EXHIBITOR CARE TABS
// ============================================
const tabButtons = document.querySelectorAll('.care-tab-btn');
const contentItems = document.querySelectorAll('.care-content-item');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tabId = button.getAttribute('data-tab');

        contentItems.forEach(item => {
            item.classList.remove('active');
        });

        document.getElementById(tabId).classList.add('active');
    });
});
