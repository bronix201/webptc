document.addEventListener('DOMContentLoaded', () => {
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


    const animatedElements = document.querySelectorAll('.card, .card-service, .requirement-card, .carousel, .section-title, .form-container, .map-placeholder');
    
    animatedElements.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });

    const header = document.querySelector('.header-custom');
    const onScroll = () => {
        if (window.scrollY > 60) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const navLinks = document.querySelectorAll('.header-nav .btn-nav');
    const path = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === path) a.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const inputPhone = document.getElementById('numeroTelefono');

    inputPhone.addEventListener('input', function() {

        this.value = this.value.replace(/\D/g, '');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        successMessage.classList.add('d-none'); 

        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        successMessage.classList.remove('d-none'); 
        successMessage.scrollIntoView({ behavior: 'smooth' }); 

        setTimeout(() => {
            form.reset();
            form.classList.remove('was-validated');
            successMessage.classList.add('d-none'); 
        }, 3000); 
    });
});