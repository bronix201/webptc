document.addEventListener('DOMContentLoaded', () => {
    // Inicializa la animación de desplazamiento (Scroll Reveal)
    // Los elementos se desvanecerán y deslizarán desde abajo
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    // Selecciona todas las tarjetas, secciones y el carrusel para animar
    const animatedElements = document.querySelectorAll('.card, .card-service, .requirement-card, .carousel, .section-title, .form-container, .map-placeholder');
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-reveal'); // Añade la clase base para transición
        observer.observe(element);
    });

    // Header shrink on scroll
    const header = document.querySelector('.header-custom');
    const onScroll = () => {
        if (window.scrollY > 60) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mark active nav link
    const navLinks = document.querySelectorAll('.header-nav .btn-nav');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === path) a.classList.add('active');
    });
});