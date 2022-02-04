$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });
    
    ll.loadAll();
    
    $('.nav-item_parent').mouseenter(function () {
        if(window.innerWidth>1199){
            $(this).find('.subnav-wrapper').stop(true, false, true).slideDown(300);
            $(this).addClass('hover');
        }
    });

    $('.nav-item_parent').mouseleave(function () {
         if(window.innerWidth>1199){
            $(this).find('.subnav-wrapper').stop(true, false, true).slideUp(300);
            $(this).removeClass('hover');
         }
    });
    
    
    $('.menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.header__nav').addClass('active');
            $('.menu-trigger').addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.header__nav').removeClass('active');
            $('.menu-trigger').removeClass('is-active');
            
            $('.nav').removeClass('nav_subnav-open');
            $('.nav-item_parent').removeClass('nav-item_subnav-open');
            $('.subnav-wrapper').hide();
            
            $('.subnav').removeClass('subnav_subnav-open');
            $('.subnav-item').removeClass('subnav-item_subnav-open');
            $('.subnav-item__list').hide();
            
            $('.subnav-2').removeClass('subnav-2_subnav-open');
            $('.subnav-2-item').removeClass('subnav-2-item_subnav-open');
            $('.subnav-3-wrapper').hide();
            
        }
        return false;
	});
    
    $('.nav-item_parent .nav-item__link').on('click', function(event) {
        if(window.innerWidth<1200){
            if($(this).parent('.nav-item_parent').hasClass('nav-item_subnav-open')){
                $(this).parents('.nav').removeClass('nav_subnav-open');
                $(this).parent('.nav-item_parent').removeClass('nav-item_subnav-open');
                $(this).next('.subnav-wrapper').hide();
            }
            else{
                $(this).parents('.nav').addClass('nav_subnav-open');
                $(this).parent('.nav-item_parent').addClass('nav-item_subnav-open');
                $(this).next('.subnav-wrapper').fadeIn(300);
            }
            
            return false;
        }
    });
    
    $('.subnav-item__title').on('click', function(event) {
        if(window.innerWidth<1200){
            if($(this).next('.subnav-item__list').length>0){
                if($(this).parent('.subnav-item').hasClass('subnav-item_subnav-open')){
                    $(this).parents('.subnav').removeClass('subnav_subnav-open');
                    $(this).parent('.subnav-item').removeClass('subnav-item_subnav-open');
                    $(this).next('.subnav-item__list').hide();
                }else{
                    $(this).parents('.subnav').addClass('subnav_subnav-open');
                    $(this).parent('.subnav-item').addClass('subnav-item_subnav-open');
                    $(this).next('.subnav-item__list').fadeIn(300);
                }
                return false;
            }            
        }
    });
    
    $('.subnav-2-item').mouseenter(function () {
        if(window.innerWidth>1199){
            if(!$(this).hasClass('hover')){
                 $('.subnav-2-item').removeClass('hover');
                    $('.subnav-3-wrapper').hide();
                    $(this).find('.subnav-3-wrapper').fadeIn();
                    $(this).addClass('hover');
            }
           
        }
    });
    
    $('.subnav-2-item__link').on('click', function(event) {
        if(window.innerWidth<1200){
            if($(this).next('.subnav-3-wrapper').length>0){
                if($(this).parent('.subnav-2-item').hasClass('subnav-2-item_subnav-open')){
                    $(this).parents('.subnav-2').removeClass('subnav-2_subnav-open');
                    $(this).parent('.subnav-2-item').removeClass('subnav-2-item_subnav-open');
                    $(this).next('.subnav-3-wrapper').hide();
                }else{
                    $(this).parents('.subnav-2').addClass('subnav-2_subnav-open');
                    $(this).parent('.subnav-2-item').addClass('subnav-2-item_subnav-open');
                    $(this).next('.subnav-3-wrapper').fadeIn(300);
                }
                return false;
            }            
        }
    });
    
    function showDiv() {
		if ($(window).scrollTop() > 60) {			
			$("#header").addClass('fixed');
			$("body").addClass('body-fixed');
		}else {
            $("#header").removeClass('fixed');	
            $("body").removeClass('body-fixed');
		}
        
	}
    showDiv();
	$(window).scroll(showDiv);
    
    
    if($('.js-slider-main').length){    
        $('.js-slider-main').on('init', function(event, slick){
            slideCount = slick.slideCount;
            var $el = $('.js-slider-main').next('.slider-nav').find('.slider-nav-count__total');         
            $el.text(slideCount);        
            var $el2 = $('.js-slider-main').next('.slider-nav').find('.slider-nav-count__current').text('1');

        });    
        $('.js-slider-main').slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll: 1,
            fade:true,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>'
        });    
        $('.js-slider-main').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $el = $('.js-slider-main').next('.slider-nav').find('.slider-nav-count__current');
        nextSlide = nextSlide + 1;
        $el.text(nextSlide);
    });
    }
    
    if($('.top-advantages').length){
        $('.top-advantages').slick({
            infinite: false,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide:true,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: {
                         variableWidth:true
                    }
                }
            ]
        }); 

        $(window).on('resize orientationchange', function() {
          $('.top-advantages').slick('resize');
        });
        
    }
    
    
    $('.tabs-nav__item').on('click', function(event) {  
        $(this).parents('.tabs').find('.tabs-nav__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.tabs').find('.tabs-content').hide();
        $(this).parents('.tabs').find('.tabs-content[data-tab="'+$(this).attr('data-tab')+'"]').fadeIn();
        
        if($(this).parents('.tabs').find('.tabs-nav-title').length){
            $(this).parents('.tabs').find('.tabs-nav-title span').text($(this).text());
            
            if(window.innerWidth<992){
                $(this).parents('.tabs-nav').removeClass('active');  
                $(this).parents('.tabs').find('.tabs-nav-title').removeClass('active');  
            }
            
        }
        if($(this).parents('.tabs').find('.tabs-select-nav__title').length){
            $(this).parents('.tabs').find('.tabs-select-nav__title span').text($(this).text());
            
            
            $(this).parents('.tabs-nav').removeClass('active');  
            $(this).parents('.tabs').find('.tabs-select-nav__title').removeClass('active');  
            
            
        }
        
        return false;
    });
    
    $('.tabs-nav-title').on('click', function(event) {  
        $(this).next('.tabs-nav').toggleClass('active');
        $(this).toggleClass('active');        
    });
    
    $('.tabs-select-nav__title').on('click', function(event) {  
        $(this).next('.tabs-nav').toggleClass('active');
        $(this).toggleClass('active');        
    });
    
    
    if($('.js-slider-about-photos').length){  
        $('.js-slider-about-photos').slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:3,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="10" height="16" viewbox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.6.48a1.5 1.5 0 0 1-.08 2.12L3.705 8l5.817 5.4a1.5 1.5 0 0 1-2.042 2.2l-7-6.5a1.5 1.5 0 0 1 0-2.2l7-6.5A1.5 1.5 0 0 1 9.6.48Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="10" height="16" viewbox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.4.48A1.5 1.5 0 0 0 .48 2.6L6.295 8 .479 13.4a1.5 1.5 0 0 0 2.042 2.2l7-6.5a1.5 1.5 0 0 0 0-2.2l-7-6.5A1.5 1.5 0 0 0 .4.48Z"/></svg></button>',
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
    }
    
    if($('.js-slider-about-photos-2').length){  
        $('.js-slider-about-photos-2').slick({
            infinite: true,
            arrows:true,
            dots:false,
            slidesToShow:4,
            slidesToScroll: 1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="10" height="16" viewbox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.6.48a1.5 1.5 0 0 1-.08 2.12L3.705 8l5.817 5.4a1.5 1.5 0 0 1-2.042 2.2l-7-6.5a1.5 1.5 0 0 1 0-2.2l7-6.5A1.5 1.5 0 0 1 9.6.48Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="10" height="16" viewbox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.4.48A1.5 1.5 0 0 0 .48 2.6L6.295 8 .479 13.4a1.5 1.5 0 0 0 2.042 2.2l7-6.5a1.5 1.5 0 0 0 0-2.2l-7-6.5A1.5 1.5 0 0 0 .4.48Z"/></svg></button>',
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow:3
                    }
                },{
                    breakpoint: 992,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
    }
    
    if($('.js-slider-sertificates').length){  
        $('.js-slider-sertificates').on('init', function(event, slick){
            slideCount = slick.slideCount;
            var $el = $('.js-slider-sertificates').parents('.slider-wrapper').find('.slider-nav-count__total');
            $el.text(slideCount);
            $('.js-slider-sertificates').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
        });    
        $('.js-slider-sertificates').slick({
            infinite:true,
            arrows:true,
            dots:false,
            slidesToScroll: 1,
            variableWidth:true,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
            appendDots:$('.js-slider-sertificates').parents('.slider-wrapper').find('.slider-nav'),
            appendArrows:$('.js-slider-sertificates').parents('.slider-wrapper').find('.slider-nav'),
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 1200,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
        $('.js-slider-sertificates').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var $el = $('.js-slider-sertificates').parents('.slider-wrapper').find('.slider-nav-count__current');
            nextSlide = nextSlide + 1;
            $el.text(nextSlide);
        });

    }
      
    if($('.js-slider-related').length){  
    $('.js-slider-related').on('init', function(event, slick){
        slideCount = slick.slideCount;
        var $el = $('.js-slider-related').parents('.slider-wrapper').find('.slider-nav-count__total');          
        $el.text(slideCount);
        $('.js-slider-related').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
    });    
    $('.js-slider-related').slick({
        infinite:true,
        arrows:true,
        dots:false,
        slidesToShow:4,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
        appendDots:$('.js-slider-related').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-related').parents('.slider-wrapper').find('.slider-nav'),
        swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true
                }
            }
        ]
    });
    $('.js-slider-related').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $el = $('.js-slider-related').parents('.slider-wrapper').find('.slider-nav-count__current');
        nextSlide = nextSlide + 1;
        $el.text(nextSlide);
    });
    }
    if($('.js-slider-reviews').length){  
    $('.js-slider-reviews').on('init', function(event, slick){
        slideCount = slick.slideCount;
        var $el = $('.js-slider-reviews').parents('.slider-wrapper').find('.slider-nav-count__total');          
        $el.text(slideCount);
        $('.js-slider-reviews').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
    });    
    $('.js-slider-reviews').slick({
        infinite:true,
        arrows:true,
        dots:true,
        slidesToShow:1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
        appendArrows:$('.js-slider-reviews').parents('.slider-wrapper').find('.slider-nav'),
        swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    dots:false
                }
            }
        ]
    });
    $('.js-slider-reviews').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $el = $('.js-slider-reviews').parents('.slider-wrapper').find('.slider-nav-count__current');
        nextSlide = nextSlide + 1;
        $el.text(nextSlide);
    });
    }
    $('.js-slider-logos').slick({
        infinite:true,
        arrows:false,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,        
        swipeToSlide:true,
        variableWidth:true,  
        prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
         appendArrows:$('.js-slider-logos').parents('.slider-wrapper').find('.slider-nav'),
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    arrows:true
                }
            }
        ]
    });

    $('.steps-item').mouseenter(function () {
        if(window.innerWidth>991){
            $(this).parents('.steps').find('.steps-item').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.steps').find('.steps-content__item').hide();
            $(this).parents('.steps').find('.steps-content__item[data-step="'+$(this).attr('data-step')+'"]').fadeIn();
        }        
        return false;
    });
    
    $('.steps-item__icon').on('click', function(event) {  
        if(window.innerWidth<992){
            $(this).parent('.steps-item').toggleClass('active-mobile');
            $(this).parent('.steps-item').find('.steps-item__info').slideToggle();
        }        
    }); 
    
    $('.footer-title a').on('click', function(event) {  
        if(window.innerWidth<768){
            $(this).parent('.footer-title').next('.footer-nav').slideToggle();
            $(this).toggleClass('active');
        }        
        return false;
    });
    
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    
    $(".input-phone").mask("+7 (999) 999-99-99").on('click', function () {
        if ($(this).val() === '+7 (___) ___-__-__') {
           $(this).setCursorPosition(4);
        }
    });
    
    $('.form-order').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true},
                email: {email:true}
            },
            messages: {                
                name: { required: "*Не может быть пустым" },
                phone: { required: "*Не может быть пустым" },
                email: { email: "Не корректный email" },
            },
            submitHandler: function(form){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-success',
                    type : 'inline',
                    opts : {
                        touch: false,
                        closeExisting: true,
                        autoFocus: false,
                        btnTpl: {  
                            smallBtn:
                                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                                '<svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.767 15a.768.768 0 0 1-.542-1.31L13.69.224a.767.767 0 0 1 1.085 1.085L1.309 14.775A.76.76 0 0 1 .767 15Z" fill="#000"/><path d="M14.232 15a.76.76 0 0 1-.542-.225L.225 1.311A.767.767 0 1 1 1.309.226L14.774 13.69a.768.768 0 0 1-.542 1.31Z" fill="#000"/></svg>' +
                                "</button>"
                            },
                        afterLoad: function(){

                        }
                    }
                });
            }
         });
    });
    
    $('.form-sales').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true}
            },
            messages: {                
                name: { required: "*Не может быть пустым" },
                phone: { required: "*Не может быть пустым" }
            },
            submitHandler: function(form){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-success',
                    type : 'inline',
                    opts : {
                        touch: false,
                        closeExisting: true,
                        autoFocus: false,
                        btnTpl: {  
                            smallBtn:
                                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                                '<svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.767 15a.768.768 0 0 1-.542-1.31L13.69.224a.767.767 0 0 1 1.085 1.085L1.309 14.775A.76.76 0 0 1 .767 15Z" fill="#000"/><path d="M14.232 15a.76.76 0 0 1-.542-.225L.225 1.311A.767.767 0 1 1 1.309.226L14.774 13.69a.768.768 0 0 1-.542 1.31Z" fill="#000"/></svg>' +
                                "</button>"
                            },
                        afterLoad: function(){

                        }
                    }
                });
            }
         });
    });
 
    
    
    $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: true,
        maxHeight: 218,
        arrowButtonMarkup: '<b class="button"><svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.998a.38.38 0 0 0 .277-.12l5.603-5.603A.38.38 0 0 0 12 .998a.38.38 0 0 0-.12-.277l-.602-.6a.38.38 0 0 0-.553 0L6 4.845 1.274.12a.38.38 0 0 0-.553 0l-.6.601a.38.38 0 0 0 0 .554l5.602 5.603c.08.08.173.12.277.12Z"/></svg></b>',
        onChange: function() {
            $(this).parents('.selectric-wrapper').addClass('selectric-wrapper-selected');
        }                  
    });
    
    if($('.form-quantity').length){
        $('<div class="quantity-nav"><button class="quantity-button quantity-up" type="button"><svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0a.38.38 0 0 1 .277.12l5.603 5.603a.38.38 0 0 1 0 .553l-.602.602a.38.38 0 0 1-.553 0L6 2.152 1.274 6.878a.38.38 0 0 1-.553 0l-.6-.602a.38.38 0 0 1 0-.553L5.722.12A.38.38 0 0 1 6 0Z"/></svg></button><button class="quantity-button quantity-down" type="button"><svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.998a.38.38 0 0 0 .277-.12l5.603-5.603A.38.38 0 0 0 12 .998a.38.38 0 0 0-.12-.277l-.602-.6a.38.38 0 0 0-.553 0L6 4.845 1.274.12a.38.38 0 0 0-.553 0l-.6.601a.38.38 0 0 0 0 .554l5.602 5.603c.08.08.173.12.277.12Z"/></svg></button></div>').insertAfter('.form-quantity input');
        $('.form-quantity').each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue >= max) {
                var newVal = oldValue;
              } else {
                var newVal = oldValue + 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
            });

            btnDown.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue <= min) {
                var newVal = oldValue;
              } else {
                var newVal = oldValue - 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
            });

          });
    }
    
    $('.regions-list-item__link').on('click', function(event) {  
        if(window.innerWidth>991){
            $('.regions-list-item__link').removeClass('active');
            $(this).addClass('active');
            $('.regions-item').removeClass('active');
            $('.regions-item_'+$(this).attr('data-region')).addClass('active');
            return false;
        }
    });
    
    $('#js-btn-delivery').on('click', function(event) {  
        $('.block-delivery__start').hide();
        $('.block-delivery__finish').fadeIn();
        return false;
    });
    
    $(".table-arrow_next").click(function() {
      event.preventDefault();
      $(this).parents('.table-wrapper-block').find(".table-wrapper").animate(
        {
          scrollLeft: "+=100px"
        },
        "slow"
      );
        $(".table-arrow_prev").removeClass('disabled');
        if($(this).parents('.table-wrapper-block').find(".table-wrapper").scrollLeft() + 100 >  $(this).parents('.table-wrapper-block').find(".table").width() - $(this).parents('.table-wrapper-block').find(".table-wrapper").width()){
           $(this).addClass('disabled');
        }        
    });

    $(".table-arrow_prev").click(function() {
      event.preventDefault();
      $(this).parents('.table-wrapper-block').find(".table-wrapper").animate(
        {
          scrollLeft: "-=100px"
        },
        "slow"
      );

        $(".table-arrow_next").removeClass('disabled');
        if($(this).parents('.table-wrapper-block').find(".table-wrapper").scrollLeft()<100){
           $(this).addClass('disabled');
        }
        
    });
    
    $('.table-wrapper').on('scroll', function() {
        if($(this).scrollLeft()<1){
           $(this).parents('.table-wrapper-block').find('.table-arrow_prev').addClass('disabled');
        }else{
            $(this).parents('.table-wrapper-block').find('.table-arrow_prev').removeClass('disabled');
        }
        if($(this).scrollLeft() >  $(this).find(".table").width() - $(this).width()){
           $(this).parents('.table-wrapper-block').find('.table-arrow_next').addClass('disabled');
        }else{
            $(this).parents('.table-wrapper-block').find('.table-arrow_next').removeClass('disabled');
        }   
        
    });
    
    $('.faq-item__title').on('click', function(event) {          
        $(this).toggleClass('active');       
        $(this).next('.faq-item__content').slideToggle();
        return false;
    });
    
    $('.app-area-list__item').mouseenter(function () {
        $(this).parents('.app-area').find('.app-area-list__item').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.app-area').find('.app-area-image').removeClass('active');
        $(this).parents('.app-area').find('.app-area-image[data-id="'+ $(this).attr('data-id')+'"]').addClass('active');
    
    });
    
    $('.production-types-item__link').on('click', function(event) {          
        $(this).toggleClass('active');       
        
        if($(this).hasClass('active')){
            $(this).text($(this).attr('data-hide'));
            $(this).prev('.text').addClass('active');
        }else{
             $(this).text($(this).attr('data-show'));
            $(this).prev('.text').removeClass('active');
        }
        return false;
    });

    $('.js-form-products-add').on('click', function(event) {          
       $('<div class="y-row form-products__row"><div class="y-col y-col-8"><select class="form-select form-select_grey"><option value="1">М100 (В7,5)</option><option value="1">2 М100 (В7,5)</option><option value="1">3 М100 (В7,5)</option><option value="1">4 М100 (В7,5)</option><option value="1">5 М100 (В7,5)</option></select></div><div class="y-col y-col-4"><input type="text" name="count" class="form-input form-input_grey-2 form-input_xs" placeholder="Количество"></div><a href="#" class="form-products__remove"><svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.614 12a.614.614 0 0 1-.433-1.048L10.952.18a.614.614 0 1 1 .868.868L1.048 11.82a.609.609 0 0 1-.434.18Z"/><path d="M11.386 12a.608.608 0 0 1-.434-.18L.18 1.048a.614.614 0 1 1 .867-.867L11.82 10.952A.614.614 0 0 1 11.386 12Z"/></svg></a></div>').insertBefore($(this));
        
        $('select').selectric({
            disableOnMobile: false,
            nativeOnMobile: true,
            maxHeight: 218,
            arrowButtonMarkup: '<b class="button"><svg width="12" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.998a.38.38 0 0 0 .277-.12l5.603-5.603A.38.38 0 0 0 12 .998a.38.38 0 0 0-.12-.277l-.602-.6a.38.38 0 0 0-.553 0L6 4.845 1.274.12a.38.38 0 0 0-.553 0l-.6.601a.38.38 0 0 0 0 .554l5.602 5.603c.08.08.173.12.277.12Z"/></svg></b>',
            onChange: function() {
                $(this).parents('.selectric-wrapper').addClass('selectric-wrapper-selected');
            }                  
        });
        return false;
    });
    
    $(document).on('click', '.form-products__remove', function(event) {          
        $(this).parents('.form-products__row').remove();
        return false;
    });
    
    $('.js-order-list').on('click', function(event) {  
        $(this).parents('.form-products').removeClass('upload').addClass('list');
        return false;    
    });
    
    
    
    // ------------  File upload BEGIN ------------
	$('#customFile').on('change',function(event){
        $(this).parents('.form-products').removeClass('list').addClass('upload');
		var files = event.target.files;
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
            
            $('#form-products__upload').append("<div class='file__value'><svg  class='file__value-icon' width='18' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.037 0c.322.061.649.107.965.192a5.394 5.394 0 0 1 3.046 2.14 5.353 5.353 0 0 1 .924 3.597 5.262 5.262 0 0 1-1.561 3.279 5084.047 5084.047 0 0 1-9.408 9.36C5.85 19.707 4.445 20.06 2.896 19.58 1.308 19.092.347 17.972.065 16.345c-.23-1.315.132-2.502 1.075-3.46 1.922-1.953 3.87-3.87 5.805-5.798 1.165-1.16 2.317-2.32 3.488-3.466a2.777 2.777 0 0 1 2.232-.773 2.784 2.784 0 0 1 2.021 1.219 2.762 2.762 0 0 1-.358 3.508c-1.211 1.215-2.43 2.422-3.645 3.632a7829.393 7829.393 0 0 1-3.072 3.057c-.348.345-.854.305-1.104-.076a.678.678 0 0 1 .051-.809c.05-.06.108-.111.162-.166l6.568-6.538c.378-.376.564-.813.454-1.343a1.392 1.392 0 0 0-.908-1.046 1.406 1.406 0 0 0-1.365.247c-.05.041-.097.086-.143.131-3.044 3.03-6.087 6.062-9.13 9.095-.964.961-1.086 2.43-.306 3.511.981 1.368 2.938 1.526 4.154.324 1.656-1.637 3.306-3.279 4.951-4.926L15.383 8.3c.896-.893 1.307-1.966 1.226-3.23-.112-1.779-1.563-3.369-3.337-3.635-1.4-.21-2.602.184-3.607 1.18-2.286 2.275-4.57 4.55-6.854 6.827-.203.202-.43.308-.715.239-.528-.128-.697-.766-.306-1.16.603-.61 1.214-1.211 1.822-1.817L8.67 1.666C9.602.734 10.712.177 12.03.037a.774.774 0 0 0 .114-.03L13.037 0Z'/></svg><div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' ><svg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M.614 12a.614.614 0 0 1-.433-1.048L10.952.18a.614.614 0 1 1 .868.868L1.048 11.82a.609.609 0 0 1-.434.18Z'/><path d='M11.386 12a.608.608 0 0 1-.434-.18L.18 1.048a.614.614 0 1 1 .867-.867L11.82 10.952A.614.614 0 0 1 11.386 12Z'/></svg></div></div>");
		}	
        
         
        
	});
    
    $('#customFile-2').on('change',function(event){
		var files = event.target.files;
		for (var i = 0; i < files.length; i++) {
			var file = files[i];
            $('#form-products__upload-2').show();
            $('#form-products__upload-2').append("<div class='file__value'><svg  class='file__value-icon' width='18' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13.037 0c.322.061.649.107.965.192a5.394 5.394 0 0 1 3.046 2.14 5.353 5.353 0 0 1 .924 3.597 5.262 5.262 0 0 1-1.561 3.279 5084.047 5084.047 0 0 1-9.408 9.36C5.85 19.707 4.445 20.06 2.896 19.58 1.308 19.092.347 17.972.065 16.345c-.23-1.315.132-2.502 1.075-3.46 1.922-1.953 3.87-3.87 5.805-5.798 1.165-1.16 2.317-2.32 3.488-3.466a2.777 2.777 0 0 1 2.232-.773 2.784 2.784 0 0 1 2.021 1.219 2.762 2.762 0 0 1-.358 3.508c-1.211 1.215-2.43 2.422-3.645 3.632a7829.393 7829.393 0 0 1-3.072 3.057c-.348.345-.854.305-1.104-.076a.678.678 0 0 1 .051-.809c.05-.06.108-.111.162-.166l6.568-6.538c.378-.376.564-.813.454-1.343a1.392 1.392 0 0 0-.908-1.046 1.406 1.406 0 0 0-1.365.247c-.05.041-.097.086-.143.131-3.044 3.03-6.087 6.062-9.13 9.095-.964.961-1.086 2.43-.306 3.511.981 1.368 2.938 1.526 4.154.324 1.656-1.637 3.306-3.279 4.951-4.926L15.383 8.3c.896-.893 1.307-1.966 1.226-3.23-.112-1.779-1.563-3.369-3.337-3.635-1.4-.21-2.602.184-3.607 1.18-2.286 2.275-4.57 4.55-6.854 6.827-.203.202-.43.308-.715.239-.528-.128-.697-.766-.306-1.16.603-.61 1.214-1.211 1.822-1.817L8.67 1.666C9.602.734 10.712.177 12.03.037a.774.774 0 0 0 .114-.03L13.037 0Z'/></svg><div class='file__value--text'>" + file.name + "</div><div class='file__value--remove' data-id='" + file.name + "' ><svg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M.614 12a.614.614 0 0 1-.433-1.048L10.952.18a.614.614 0 1 1 .868.868L1.048 11.82a.609.609 0 0 1-.434.18Z'/><path d='M11.386 12a.608.608 0 0 1-.434-.18L.18 1.048a.614.614 0 1 1 .867-.867L11.82 10.952A.614.614 0 0 1 11.386 12Z'/></svg></div></div>");
		}	
        
         
        
	});
	
	//Click to remove item
	$('body').on('click', '.file__value', function() {
		$(this).remove();
	});
	// ------------ File upload END ------------ 
    
    
    $('.reasons-list-item').on('mouseenter', function(event) {
        if(window.innerWidth>991){
            $(this).parents('.reasons').find('.reasons-list-item').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.reasons').find('.reasons-content-item').hide();
            $(this).parents('.reasons').find('.reasons-content-item[data-id="'+$(this).attr('data-id')+'"]').fadeIn();
        }       
       
    });
    
    $('.reasons-list-item__top').on('click', function(event) {  
        if(window.innerWidth<992){
            $(this).parent('.reasons-list-item').toggleClass('active-mobile');
            $(this).parent('.reasons-list-item').find('.reasons-list-item__info').slideToggle();
        }        
    }); 
    
    $('.js-tooltip').tooltipster({
        maxWidth: 180,
        side:'top'
    });
    
    
    if($('.js-slider-autopark').length){  
        $('.js-slider-autopark').on('init', function(event, slick){
            slideCount = slick.slideCount;
            var $el = $('.js-slider-autopark').parents('.slider-wrapper').find('.slider-nav-count__total');
            $el.text(slideCount);
            $('.js-slider-autopark').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
        });    
        $('.js-slider-autopark').slick({
            infinite:true,
            arrows:true,
            dots:false,
            slidesToScroll: 4,
            variableWidth:true,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
            appendDots:$('.js-slider-autopark').parents('.slider-wrapper').find('.slider-nav'),
            appendArrows:$('.js-slider-autopark').parents('.slider-wrapper').find('.slider-nav'),
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint: 1200,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
        $('.js-slider-autopark').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var $el = $('.js-slider-autopark').parents('.slider-wrapper').find('.slider-nav-count__current');
            nextSlide = nextSlide + 1;
            $el.text(nextSlide);
        });
     
        var isSliding = false;

        $('.js-slider-autopark').on('beforeChange', function() {
            isSliding = true;
        });

        $('.js-slider-autopark').on('afterChange', function() {
            isSliding = false;
        });

        $('.js-slider-autopark').find(".js-popup").click(function() {
            if (isSliding) {
                event.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
        });

    }
    
    $('.js-popup').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false,
        btnTpl: {  
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.767 15a.768.768 0 0 1-.542-1.31L13.69.224a.767.767 0 0 1 1.085 1.085L1.309 14.775A.76.76 0 0 1 .767 15Z" fill="#000"/><path d="M14.232 15a.76.76 0 0 1-.542-.225L.225 1.311A.767.767 0 1 1 1.309.226L14.774 13.69a.768.768 0 0 1-.542 1.31Z" fill="#000"/></svg>' +
                "</button>"
            },
        afterLoad: function(){

            $('.slider-for').slick('setPosition');
            $('.slider-for-nav').slick('setPosition');
        }
    });
    
    
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-for-nav'
    });
    $('.slider-for-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      focusOnSelect: true,
        arrows:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.34 1.112a.975.975 0 0 1-.052 1.377L2.508 6l3.78 3.51a.975.975 0 1 1-1.327 1.43L.411 6.714a.975.975 0 0 1 0-1.428l4.55-4.225a.975.975 0 0 1 1.378.05Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.66 1.112a.975.975 0 0 0 .052 1.377L4.492 6 .713 9.51a.975.975 0 1 0 1.327 1.43l4.55-4.226a.975.975 0 0 0 0-1.428L2.039 1.06a.975.975 0 0 0-1.378.05Z"/></svg></button>',
        responsive: [   
                {
                    breakpoint:992,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
    });
    
    
    if($('.js-slider-team').length){  
        $('.js-slider-team').on('init', function(event, slick){
            slideCount = slick.slideCount;
            var $el = $('.js-slider-team').parents('.slider-wrapper').find('.slider-nav-count__total');
            $el.text(slideCount);
            $('.js-slider-team').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
        });    
        $('.js-slider-team').slick({
            infinite:true,
            arrows:true,
            dots:false,
            slidesToScroll: 1,
            slidesToShow:4,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
            appendDots:$('.js-slider-team').parents('.slider-wrapper').find('.slider-nav'),
            appendArrows:$('.js-slider-team').parents('.slider-wrapper').find('.slider-nav'),
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint:992,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
        });
        $('.js-slider-team').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var $el = $('.js-slider-team').parents('.slider-wrapper').find('.slider-nav-count__current');
            nextSlide = nextSlide + 1;
            $el.text(nextSlide);
        });

    }
  
    
    var bottomReached = false;

    var instance = $('.text-overflow').overlayScrollbars(
    {
        scrollbars : 
        {
            
        },
        callbacks : 
        {
          // gets fired when scroll is stopped 
          onScroll: function() 
          { 
            // get the position of the scrollbar
            var scrollInfo = instance.scroll();

            // check if the scrollbar has reached the bottom
            if (scrollInfo.position.y !== scrollInfo.max.y)
            {
               bottomReached = false;
                $('.text-overflow').removeClass('end');
            }
            else
            {
               // check if bottom has been already reached by the scrollbar
               // so the function is not called multiple times
               if (!bottomReached)
               {
                 bottomReached = true;
                 //getNextCommunications();
                   $('.text-overflow').addClass('end');
               }
             }
          },
        }
    }).overlayScrollbars();
    
    
    $('.js-slider-equipment').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows:true,        
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.34 1.112a.975.975 0 0 1-.052 1.377L2.508 6l3.78 3.51a.975.975 0 1 1-1.327 1.43L.411 6.714a.975.975 0 0 1 0-1.428l4.55-4.225a.975.975 0 0 1 1.378.05Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.66 1.112a.975.975 0 0 0 .052 1.377L4.492 6 .713 9.51a.975.975 0 1 0 1.327 1.43l4.55-4.226a.975.975 0 0 0 0-1.428L2.039 1.06a.975.975 0 0 0-1.378.05Z"/></svg></button>',
        responsive: [   
                {
                    breakpoint:1200,
                    settings: {
                        slidesToShow:3
                    }
                },
                {
                    breakpoint:992,
                    settings: {
                        variableWidth:true
                    }
                }
            ]
    });
    
    if($('.js-slider-projects').length){  
        $('.js-slider-projects').on('init', function(event, slick){
            slideCount = slick.slideCount;
            var $el = $('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav-count__total');
            $el.text(slideCount);
            $('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav-count__current').text('1');
        });    
        $('.js-slider-projects').slick({
            infinite:true,
            arrows:true,
            dots:false,
            slidesToScroll: 1,
            variableWidth:true,
            centerMode:true,
            slidesToShow:1,
            prevArrow:'<button type="button" class="slick-prev"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.287 3.774H3.021L6.118 1.24c.345-.283.347-.742.003-1.026A1.023 1.023 0 0 0 4.872.21L.26 3.986H.259c-.345.283-.346.744 0 1.028L4.873 8.79c.346.282.905.281 1.249-.003.344-.284.342-.743-.003-1.026L3.02 5.226h46.266c.488 0 .883-.325.883-.726 0-.4-.395-.726-.883-.726Z"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="51" height="9" viewBox="0 0 51 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.713 3.774h46.266L44.882 1.24c-.346-.283-.347-.742-.003-1.026A1.023 1.023 0 0 1 46.128.21l4.612 3.775h.001c.345.283.346.744 0 1.028L46.127 8.79a1.023 1.023 0 0 1-1.249-.003c-.344-.284-.342-.743.003-1.026l3.097-2.534H1.713C1.225 5.226.83 4.9.83 4.5c0-.4.395-.726.883-.726Z"/></svg></button>',
            appendDots:$('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav'),
            appendArrows:$('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav'),
            swipeToSlide:true,
            responsive: [   
                {
                    breakpoint:1320,
                    settings: {
                        variableWidth:false,
                        centerMode:false,
                    }
                },
                {
                    breakpoint:992,
                    settings: {
                        variableWidth:true,
                        centerMode:false,
                    }
                }
            ]
        });
        $('.js-slider-projects').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var $el = $('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav-count__current');
            nextSlide = nextSlide + 1;
            $el.text(nextSlide);
        });

    }
    
    $('.vacancy-title').on('click', function(event) {  
        $(this).next('.vacancy-content').slideToggle();
        $(this).addClass('active');
    });
    
    
    $('.slick-cloned').removeAttr('data-fancybox'); 
    $('.slick-cloned a').removeAttr('data-fancybox'); 
    
    var ll2 = new LazyLoad({
        elements_selector: ".slick-slide .lazyload",
    });
    
    ll2.loadAll();
    
    
    
    if($('#map-delivery').length){
        ymaps.ready(initDelivery);
        
    }
    
     if($('#map-pickup').length){
        ymaps.ready(initPickup);
        
    }
 
});



function initDelivery() {
    var myMap = new ymaps.Map("map-delivery", {
            center: [55.683326, 37.981094],
            zoom: 9,
            controls: ['geolocationControl']
        }, {
           
        }
    );

    myMap.geoObjects
        .add(new ymaps.Placemark([55.683326, 37.981094], {
            balloonContent: ''
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
    }
    ));
}

function initPickup() {
    var myMap = new ymaps.Map("map-pickup", {
            center: [55.683326, 37.981094],
            zoom: 9,
            controls: ['geolocationControl']
        }, {
            
        }
    );

    myMap.geoObjects
        .add(new ymaps.Placemark([55.683326, 37.981094], {
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-map.svg',
            iconImageSize: [28, 36],
            iconImageOffset: [-14, -38]
    }
    ));
}


