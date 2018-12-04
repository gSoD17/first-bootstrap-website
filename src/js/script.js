$(document).ready(function() {
    $(document).scroll(function() {
        let scrollStart = 0;
        let startChange = $('#main-container');
        let offset = startChange.offset();

        if (startChange.length) {
            $(document).scroll(function() {
                scrollStart = $(this).scrollTop();

                if (scrollStart > offset.top) {
                    $(".navbar").css({
                        'background-color': 'white',
                        'color': 'black'
                    });
                } else {
                    $('.navbar').css('background-color', 'transparent');
                }
            })
        }
    })

    // ScrollReval Code
    ScrollReveal().reveal('.headline-1', {
        delay: 2000,
        distance: '100px',
        origin: 'left'
    });

    ScrollReveal().reveal('.headline-2', {
        delay: 2000,
        distance: '100px',
        origin: 'right'
    });
    
    ScrollReveal().reveal('.title', { delay: 2000 });
    ScrollReveal().reveal('.tagline', { delay: 2000 });
})
