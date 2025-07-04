document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link, .nav-sidebar .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('/#') && window.location.pathname === '/') {
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // Intersection Observer for section animations and nav highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-sidebar .nav-link, .navbar-nav .nav-link');
    const options = {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;
            const sidebarLink = document.querySelector(`.nav-sidebar .nav-link[href="/#${id}"]`);
            const navbarLink = document.querySelector(`.navbar-nav .nav-link[href="/#${id}"]`);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                entry.target.classList.add('active');
                if (sidebarLink) sidebarLink.classList.add('active');
                if (navbarLink) navbarLink.classList.add('active');
            } else {
                entry.target.classList.remove('active');
                if (sidebarLink) sidebarLink.classList.remove('active');
                if (navbarLink) navbarLink.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Ensure sidebar toggle works with AdminLTE
    const sidebarToggle = document.querySelector('[data-widget="pushmenu"]');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('sidebar-open');
            document.body.classList.toggle('sidebar-collapse');
        });
    }

    // Handle window resize for responsive sidebar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767.98) {
            document.body.classList.remove('sidebar-collapse');
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.add('sidebar-collapse');
            document.body.classList.remove('sidebar-open');
        }
    });
});