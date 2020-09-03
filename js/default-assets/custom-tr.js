
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
        autoplay: true,
        prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='img/left.png'></button>",
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='img/right.png'></button>",
        responsive:[{
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }]

      });


    $(".map-slider-footer").slick({
        lazyLoad: 'ondemand',
        prevArrow:"<span class='prev'><p>Trụ sở chính </p></span>",
        nextArrow:"<span class='next'></span>",
      });

      /* slide trang 13 */
      $(".slider-page-13").slick({
        dots: false,
        infinite: true,
        margin:10,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<span class='prev-mini slick-arrow'><img class='left-arrow ' src='img/rightmini.png'></span>",
        nextArrow:"<span class='next-mini slick-arrow'><img class='right-arrow ' src='img/leftmini.png'></span>",
      });


    $(".lazy").slick({
        lazyLoad: 'ondemand', 
        infinite: true,
         dots: true,
        prevArrow:"<span class='prev'></span>",
        nextArrow:"<span class='next'></span>",
      });

    $(".click-item").click(function () {
        $(".show-item").fadeToggle("slow");
    });
  $(".list-cate-seemore").click(function () {
        $(".list-see-more").fadeToggle("slow");
    });
  $(".policy .btn-style-8").click(function () {
        $(".readmore-20").fadeToggle("slow");
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
    
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: false,
    });
    $('.slider-for-map').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-map'
      });
      $('.slider-nav-map').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for-map',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      prevArrow:"<button class='prev-map slick-prev'><img class='left-map-arrow ' src='img/leftmap.png'></button>",
          nextArrow:"<button class='next-map slick-next'><img class='right-map-arrow ' src='img/rightmap.png'></button>",
      });
    $(".humburger").click(function () {
          $(".list-menu-mobile").fadeToggle("slow");
      });
    $(".menu-mobile").click(function(){
      $(this).addClass("menu-mobile-active");
    });
    $(".slider-new-mobile").slick({
        lazyLoad: 'ondemand',
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

    /* menu co dinh */
    jQuery(document).ready(function($) {
            var $filter = $('.header-mobile');
            var $filterSpacer = $('<div />', {
                "class": "vnkings-spacer",
                "height": $filter.outerHeight()
            });
            if ($filter.size())
            {
                $(window).scroll(function ()
                {
                    if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top)
                    {
                        $filter.before($filterSpacer);
                        $filter.addClass("fix");
                    }
                    else if ($filter.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
                    {
                        $filter.removeClass("fix");
                        $filterSpacer.remove();
                    }
                });
            }
            
 
        });

    
    var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        };
    });
