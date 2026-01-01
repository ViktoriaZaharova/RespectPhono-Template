$(document).ready(function () {

    // language dropdown
    $('.language').click(function () {
        $(this).find('.dropdown-menu').fadeToggle();
    });
    // language dropdown


    //  dropdown
    $('.select-group').click(function () {
        $(this).find('.dropdown-menu').fadeToggle();
    });
    //  dropdown




    $('.credit-card').click(function () {
       $('.box-credit-card').slideDown();
    });

    // recomended slider
    $('.recommended__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // recomended slider


    // simular slider
    $('.similar-products__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // simular slider

    // authorised slider
    $('.authorised__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // authorised slider

    // bestsellers slider
    $('.bestsellers__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // bestsellers slider


    // slider arrows my-style
    $('.slider-arrows .arrow-next').on('click', function () {
        $('.bestsellers__slider').slick('slickNext');
    });


    $('.slider-arrows .arrow-prev').on('click', function () {
        $('.bestsellers__slider').slick('slickPrev');
    });
    // slider arrows my-style

    // autoheights
    $('.card .title, .card .card__bottom').equalHeights();
    // autoheights


    // mobile menu
    $('.btn-mobile-menu').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn();
        $('#mobile-menu').animate({
            left: '0px'
        }, 300);
    });

    $('#mobile-menu .close, #overlay').click(function () {
        $('#mobile-menu').animate({
            left: '-100%'
        }, 300);
        $('#overlay').fadeOut();
    });
    // mobile menu


    // block cart
    $('.btn-cart').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn();
        $('.basket__popup').animate({
            right: '0px'
        }, 300);
    });

    $('.basket__popup .close, #overlay').click(function () {
        $('.basket__popup').animate({
            right: '-100%'
        }, 300);
        $('#overlay').fadeOut();
    });
    // block cart


    // mobile search
    $('.btn-mobile-search').click(function () {
        $('.form-search').slideToggle();
    });
    // mobile search


    // ползунок цен
    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0] + '€');
            //Поле максимального значения
            $(".dec2").val(ui.values[1] + '€');
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    // ползунок цен

    // image min-max click
    $(document).ready(function () {

        var penImg = $('.product-image__max img');
        var linksImg = $('.product-image__max a');

        $('.product-image__min div.item').on('click', function () {
            // e.preventDefault();
            $('.product-image__min div.item').removeClass('click-item');
            $(this).addClass('click-item');
            var imgPath;

            imgPath = $(this).attr('data-img-path');

            penImg.attr('src', imgPath);
            linksImg.attr('href', imgPath);

        });

    });
// image min-max click end

    $('[data-fancybox]').fancybox({
        thumbs: false,
        slideShow: false,
        fullScreen: false
    });

    // amount
    $('.down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // amount end

    $('.btn-show').click(function () {
       $('.shopping-basket .popup-body').slideToggle();
    });


    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // tabs end

});


$(window).on("load resize", function () {
    var width = $(document).width();

    if (width < 570) {
        $('.recommended__slider').slick('unslick');
        $('.authorised__slider').slick('unslick');
    } else {
        $('.recommended__slider').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        });

        $('.authorised__slider').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        });
    }

});


// dropdown close
$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
    var block = $(".dropdown-menu"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
        block.fadeOut(); // если условия выполняются - скрываем наш элемент
    }
});
// dropdown close