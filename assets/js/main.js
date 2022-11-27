ScrollReveal().reveal('.longBanners');
$(window).on('load', function() {
    $('.loader').fadeOut('slow');
    $('body').removeClass('stop-scrolling')



    document.querySelector('.pocetna').addEventListener('click', function() {

        document.querySelector('.mainBackground').scrollIntoView({
            behavior: 'smooth'
        });


    })

    document.querySelector('.nastali').addEventListener('click', function() {

        document.querySelector('#bla').scrollIntoView({
            behavior: 'smooth'
        });


    })
    document.querySelector('.organizacije').addEventListener('click', function() {

        document.querySelector('.organizationHead').scrollIntoView({
            behavior: 'smooth'
        });


    })


});