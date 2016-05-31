$('.js-slick').slick({
    arrows: false,
    dots: true,
    rows: 2,
    slidesPerRow: 4
});

$('.on-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);

    return false;
});

$('a[href="#"]').on('click', function() {
    return false;
});