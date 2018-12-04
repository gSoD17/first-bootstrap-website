$(document).ready(function() {

    $(document).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 680);
        $('nav').toggleClass('navbar-light', $(this).scrollTop() > 680);
    });

    // ScrollReval Code
    ScrollReveal().reveal('.headline-1', {
        delay: 1000,
        distance: '100px',
        origin: 'left'
    });

    ScrollReveal().reveal('.headline-2', {
        delay: 1000,
        distance: '100px',
        origin: 'right'
    });
    
    ScrollReveal().reveal('.title', { delay: 1000 });
    ScrollReveal().reveal('.tagline', { delay: 1000 });
})
