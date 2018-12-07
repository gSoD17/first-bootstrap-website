$(document).ready(function() {

    $(document).scroll(function() {
        let scrollStart = 0;
        let startChange = $('#content-container');
        let offset = startChange.offset();

        if (startChange.length) {
            $(document).scroll(function() {
                scrollStart = $(this).scrollTop() + 164;

                if (scrollStart > offset.top) {
                    $('.navbar').removeClass('navbar-dark')
                        .removeClass('bg-clear')
                        .addClass('navbar-light')
                        .addClass('bg-white');
                } else if (scrollStart < offset.top) {
                    $('.navbar').removeClass('navbar-light')
                        .removeClass('bg-white')
                        .addClass('navbar-dark')
                        .addClass('bg-clear')
                }
            })
        }
    })

    // $(document).scroll(function() {
    //     $('nav').toggleClass('scrolled', $(this).scrollTop() > 680);
    //     $('nav').toggleClass('navbar-light', $(this).scrollTop() > 680);
    // });

    // ScrollReval Code
    ScrollReveal().reveal('.headline-1', {
        delay: 1000,
        distance: '100px',
        origin: 'left'
    });

    ScrollReveal().reveal('.headline-2', {
        delay: 1200,
        distance: '0px',
        origin: 'right'
    });
    
})
