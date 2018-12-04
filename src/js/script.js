$(document).ready(function() {
    $(document).scroll(function() {
        let scrollStart = 0;
        let startChange = $('#main-container');
        let offset = startChange.offset();

        if (startChange.length) {
            $(document).scroll(function() {
                scrollStart = $(this).scrollTop();

                if (scrollStart > offset.top) {
                    $(".navbar").css('background-color', '#f0f0f0');
                } else {
                    $('.navbar').css('background-color', 'transparent');
                }
            })
        }
    })

    // ScrollReval Code
    ScrollReveal().reveal('.headline', { delay: 500 });
    ScrollReveal().reveal('.title', { delay: 1000 });
    ScrollReveal().reveal('.tagline', { delay: 1200 });
})
