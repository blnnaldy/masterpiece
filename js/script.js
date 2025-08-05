document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const navItems = document.querySelectorAll('.nav-item');

    // Toggle menu mobile
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('hidden');
    });

    // Tutup menu mobile saat link diklik
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarMenu.classList.add('hidden');
        });
    });

    // Set link aktif berdasarkan halaman saat ini
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === currentPath) {
                item.setAttribute('aria-current', 'page');
            } else {
                item.removeAttribute('aria-current');
            }
        });
    }

    setActiveLink();

    // Toggle tema terang/gelap
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Theme';
    themeToggle.className = 'theme-toggle';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', function() {
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
    });
});
