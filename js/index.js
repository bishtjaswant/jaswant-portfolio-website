$(document).ready(function(params) {
     
      $(".fa-bars").on("click", function(){
            $(this).toggleClass("fa-times");
            $('.navbar').toggleClass("navbar-show")
      });


      $(window).on("load scroll", ()=>{
            $('.fa-bars').removeClass("fa-times");
            $('.navbar').removeClass("navbar-show")
      });

      // $(document).on("click", ()=>{
      //       $('.navbar').removeClass("navbar-show");
      // })
// 

      if(  $(window).scrollTop()>190      ){
            // console.log("scroll")
            $(".header").css({"background":'#6c5ce7','box-shadow':'0 .4rem .4rem rgba(0,0,0,.5)'});
      }else{
            $(".header").css({"background":'none','box-shadow':'none'});

      }

      /*
           $( "div" ).slideUp();
      */

           $( ".accordion__header" ).click(function(){
                
                 $( '.accordion .accordion__content' ).slideUp();
                 $(this).next(".accordion__content").slideDown();
                 $('.accordion .accordion__header span').text("+");
                 $(this).children('span').text("-");
           })


});