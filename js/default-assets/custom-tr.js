
$(document).on('ready', function() {
	new WOW().init();

      $(".map-slider").slick({
        lazyLoad: 'ondemand',
      /*  infinite: true,*/
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        margin:30,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/left.png'></button>",
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/right.png'></button>",

      });

    $(".map-slider-footer").slick({
        lazyLoad: 'ondemand',
    
        prevArrow:"<span class='prev'><p>Trụ sở chính </p></span>",
        nextArrow:"<span class='next'></span>",
      });

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
         dots: true,
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });
    $(".click-item").click(function () {
        $(".show-item").fadeToggle("slow");
    });
  
    $('input.input-qty').each(function() {
        var $this = $(this),
            qty = $this.parent().find('.is-form'),
            min = Number($this.attr('min')),
            max = Number($this.attr('max'))
        if (min == 0) {
            var d = 0
        } else d = min
        $(qty).on('click', function() {
            if ($(this).hasClass('minus')) {
                if (d > min) d += -1
            } else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1
                if (x <= max) d += 1
            }
            $this.attr('value', d).val(d)
        })
    });

    // back to top
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
   

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay: false,
    });
    $(".humburger").click(function () {
          $(".list-menu-mobile").fadeToggle("slow");
      });
    $(".menu-mobile").click(function(){
      $(this).addClass("menu-mobile-active");
    });
    /*$(".menu-mobile").click(function(){
      $(this).remove(".menu-mobile-active");
    });*/
    $(".slider-new-mobile").slick({
        lazyLoad: 'ondemand',
      /*  infinite: true,*/
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });
    $(".th").click(function () {
          $(".checkbox-th").fadeToggle("slow");
      });
    $(".gb").click(function () {
          $(".checkbox-gb").fadeToggle("slow");
      });
    $(".nxs").click(function () {
          $(".checkbox-nxs").fadeToggle("slow");
      });
  
});
