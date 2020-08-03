$(function() {

    // Chung
    var topup = $('.top-up');

    topup.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});