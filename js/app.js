$(document).foundation()

$(document).ready(function() {
    $('.orbit').slick({
        autoplay: true,
        fade: true,
        dots: true,
        adaptiveHeight: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: true,
        centerMode: true,
        autoplaySpeed: 2500
    });


    $('.house-one-slides').hide();
    $('.house-two-slides').hide();
    $('.house-three-slides').hide();
    $('.house-four-slides').hide();
    $('.house-five-slides').hide();
    $('.house-six-slides').hide();

    $('.exit').hide();

    $('.house-one').click(function() {
        $('main').hide();
        $('.house-two-slides').hide();
        $('.exit').show();
        $('.house-one-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.house-two').click(function() {
        $('main').hide();
        $('.exit').show();
        $('.house-two-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.house-three').click(function() {
        $('main').hide();
        $('.exit').show();
        $('.house-three-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.house-four').click(function() {
        $('main').hide();
        $('.exit').show();
        $('.house-four-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.house-five').click(function() {
        $('main').hide();
        $('.exit').show();
        $('.house-five-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.house-six').click(function() {
        $('main').hide();
        $('.exit').show();
        $('.house-six-slides').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.exit').click(function() {
        $('.house-one-slides').hide();
        $('.house-two-slides').hide();
        $('main').show();
        $('.slick-slider').each(function() {
            $(this).slick("getSlick").refresh();
        });
    });

    $('.projects-link').click(function() {
        $('html').toggleClass('scroll');
    });
});
