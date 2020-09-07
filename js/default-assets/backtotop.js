$(function() {

    // Chung
    var topup = $('.top-up');

    topup.on('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

$('.slider-for-video').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.slider-nav-video'
        });
        $('.slider-nav-video').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for-video',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          initialSlide: 2,
          arrows: true,
           prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/images/pv1.png'></button>",
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/images/nv1.png'></button>",
});

$(".click-title").click(function(){
  $(this).addClass("active-click");
});
$(".title-tabfaq-item").click(function(){
  $(this).addClass("active-click");
});

$(".text").click(function(){
  $(this).css("display","none");
});
$('.block__title').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
/**/

 
// Trang san pham
   
    $('.pre-img-carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.slider-nav-video'
        });
        $('.slider-nav-video').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for-video',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          initialSlide: 2,
          arrows: true,
           prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/images/pv1.png'></button>",
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/images/nv1.png'></button>",
    });

    var p_img = $('#pills-images .pre-img-carousel');
    var p_vd = $('#pills-videos .pre-img-carousel');

    p_img.on('click', '.item', function(e){
        e.preventDefault();
        $('#img-preview').css('display', 'block');
    });

    p_vd.on('click', '.item', function(e){
        e.preventDefault();
        $('#video-preview').css('display', 'block');
    });

    $('#img-preview').on('click', '.close', function(e){
        e.preventDefault();
        $('#img-preview').css('display', 'none');
    });

    $('#video-preview').on('click', '.close', function(e){
        e.preventDefault();
        $('#video-preview').css('display', 'none');
    });

   
     $('.pre-carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          asNavFor: '.slider-nav-video'
        });
        $('.slider-nav-video').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for-video',
          dots: false,
          centerMode: true,
          focusOnSelect: true,
          initialSlide: 2,
          arrows: true,
           prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/images/pv1.png'></button>",
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/images/nv1.png'></button>",
    });

    $('#tech-show').on('click', function(event) {
        event.preventDefault();
        var ts = $('.tech-section > div');
        var c = ts.children('.tr').length;
        var tr = $('.tech-section .tr:nth-child(n+6)');
        if(tr.css('display') == 'none'){
            tr.css('display', 'flex');
        } else {
            tr.css('display', 'none');
        }
    });

    $('.show-hide-text .show-more').on('click', 'a', function(event) {
        event.preventDefault();
        $('.show-hide-text p').css('display', 'block');
        $(this).css('display', 'none');
    });

    // Loc san pham
    $('.m-tab-menu .nav-link').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.m-tab-menu .nav-link.active ~ .nav-submenu').toggleClass('d-block');
    });

    $('.m-tab-menu .nav-submenu .nav-link').on('click', function(e){
        e.preventDefault();
        $('.m-tab-menu .nav-link').removeClass('active');
        $(this).addClass('active');
        $('.m-tab-menu .nav-submenu').removeClass('d-block');
        $(this).parent().addClass('d-block');
    });