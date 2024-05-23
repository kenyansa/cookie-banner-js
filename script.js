document.addEventListener('DOMContentLoaded', (event) => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Check if the user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        cookieBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.style.display = 'none';
    });

    rejectButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.style.display = 'none';
    });
});
