$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll < 715) {
        $('.fixed-top').css('background', 'transparent');
    } else {
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.7)');
    }
    if (scroll > 50) {
        document.querySelectorAll('.animate_about')[0].classList.add('animated', 'slideInUp');
        document.querySelectorAll('.animate_about')[1].classList.add('animated', 'slideInUp');


    }

    if (scroll > 820) {

        document.querySelector('.card1').classList.add('animated', 'fadeInLeft');
        document.querySelector('.card2').classList.add('animated', 'zoomIn');
        document.querySelector('.card3').classList.add('animated', 'fadeInRight');
    }
    if (scroll > 1200) {
        document.querySelector('.card4').classList.add('animated', 'fadeInLeft');
        document.querySelector('.card5').classList.add('animated', 'zoomIn');
        document.querySelector('.card6').classList.add('animated', 'fadeInRight');
    }
});