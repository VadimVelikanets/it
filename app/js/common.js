$(function() {

    $(window).on('load', function (e) {
        $('h1, .p, .hidden_btn').addClass('show');
        $('.design').css('opacity', '1');

       

      });

    /*Всплывающее окно */

    $('body').on('scroll', function (e) {
      //Изменяем фон хедера в зависимости от фона
      const header = $('header').height();
      const wrapper = $('header').offset().top;
      const headBg = $('.head__bg').height();
      const height = header + wrapper;
      if(!headBg){
              if(height < 0){
              $('.header__wrapper, .mobile__header').css('background', '#fff');
            } else{
              $('.header__wrapper, .mobile__header').css('background', 'rgba(255, 255, 255, 0)');

            }
      }
      else{
        if(height < -headBg){
          $('.header__wrapper, .mobile__header').css('background', '#fff');
        } else{
          $('.header__wrapper, .mobile__header').css('background', 'rgba(255, 255, 255, 0)');

        }
      }


        let animateScrollStart = 200;
        let animateScrollBottom = $(window).scrollTop() + $(window).height();
        let animateScrollBottomStart = animateScrollBottom - animateScrollStart;

        $('.fade-up, .fade-right').each(function () {
            var offSetTopAnimateBlock = $(this).offset().top;
            if(animateScrollBottomStart > offSetTopAnimateBlock){
                $(this).addClass('animate');

            } else {
                 $(this).removeClass('animate');
         
            }
        })
    });
    /* Конец */

    $('.hamburger').click(function(){
      const header = $('header').height();
      const wrapper = $('header').offset().top;
      const height = header + wrapper;
      const headBg = $('.head__bg').height();

      console.log(height, headBg);
		if( $(this).children().hasClass('first_opened') && $(this).children().hasClass('second_opened') ){

			$(this).children('.first_opened').removeClass('first_opened').addClass('first__line');
			$(this).children('.second_opened').removeClass('second_opened').addClass('second__line');
      $('.mobile__menu, .mobile__menu .container').css('height', '0px');

      if(height > -headBg){
        $('.header__wrapper, .mobile__header').css('background', 'rgba(255, 255, 255, 0)');
      }


		} else{
			$(this).children('.first__line').addClass('first_opened').removeClass('first__line');
			$(this).children('.second__line').addClass('second_opened').removeClass('second__line');
       $('.mobile__menu').css('height', '640px');
       $('.mobile__menu .container').css('height', '100%');
         $('.mobile__header').css('background', '#fff');
		}
	});

       $('.mail_box').on({
        mouseenter: () => {
            $(this).find('.mail').css('opacity', '0');
            $(this).find('.mail__white').css('opacity', '1');
        },
        mouseleave: () => {
            $(this).find('.mail').css('opacity', '1');
            $(this).find('.mail__white').css('opacity', '0');
        }
      });

      $('.btn__map').on({
        mouseenter: () => {
            $(this).find('.map__blue').css('opacity', '0');
            $(this).find('.map__white').css('opacity', '1');
        },
        mouseleave: () => {
            $(this).find('.map__blue').css('opacity', '1');
            $(this).find('.map__white').css('opacity', '0');
        }
      });

    
    $('.file_input').change((e) =>{
      let fileName = e.target. files[0]. name;
          console.log(fileName);
          $('.file__name').html('Выбран файл ' + fileName)              
          $('.file__name').css("max-width", "280px");

      })

     //Phone validation    
     $(".phone_input").mask("999(99) 999-9999");
      //AJAX
    //   $('.form').submit((e) =>{
    //     e.preventDefault();
    //     const form_data = $(this).serialize();
    //     let url = $(this).attr('action');
        
    //     $.ajax({
    //        url: url,
    //        type: 'POST',
    //        data: form_data,
    //         dataType: "text",
    //         success: function(data){
    //           alert(data);
    //           $("input").val('');
    //        }
    //        , error: function(jqXHR, textStatus, err){
    //            alert('text status '+textStatus+', err '+err);
    //            $("input").val('');
    //        }
    //     })
    // });
    //Переключение разделов
    $('.link__about').click(
        function(e){
        e.preventDefault();
        const link = $(this).attr('href');
        $('.parent__txt').children().fadeOut();
        $(link).fadeIn('fast');

        $(this).attr('href', )
        if( !$(this).hasClass('active')){
            $('.link__about').removeClass('active');
            $(this).addClass('active');
        };
    });
    //Переключение блоков на странице about
    $('.about-tabs__btn a').click(
      function(e){
      e.preventDefault();
      const linkAbout = $(this).attr('href');
      $('.about__tabs__inner').children().fadeOut();
      $(linkAbout).fadeIn('slowly');
      
    })

    $('.categories__wrapper a').click(
        function(e){
            e.preventDefault();
            $(this).parent().find('a').removeClass('active');
            $(this).addClass('active');
        }
    )
    //Модальные окна с информацией
    
    $('.tech__icon').click(
      function(){
        $('.tech__hidden').css('display', 'none');
        $(this).parent().find('.tech__hidden').css('display', 'block');    
      }
    )
    
    $('.modal__close').click(
      function(){
         $(this).parent().css('display', 'none');  
      }    
    )
   //modal map
   $('.btn__modal').click(
     function(e){
       e.preventDefault();

       $('.popup__container, .modal__map').fadeIn(300,
        function(){
          $('.popup__container, .modal__map').css({'display' : 'block', 'opacity': '1'})
        })
      
     }
   ) 

  $('.popup__container').click(
    function(){
      $('.popup__container, .modal__map')
      .fadeIn(200, 
        function(){
          $('.popup__container, .modal__map').css({'display': 'none'})
        })
      .css('opacity', '0')
    }
  )
  //Portfolio inner
  $('[data-fancybox="gallery"]').fancybox({
    baseClass: 'myFancyBox',
   thumbs : {
    
     autoStart : true,
     axis      : 'x'
   }
 })
 
//Переключение языка
$('.language__btn').click(
  function(){
    if( $(this).hasClass('disabled')){
      $('.language__btn').addClass('disabled');
      $(this).removeClass('disabled');
    }

  }
)
});
