const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu_icon-btn");
const cancelBtn = document.querySelector(".close_icon-btn"); 

menuBtn.addEventListener('click',function (e) {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("hide")
})
cancelBtn.addEventListener('click',function (e) {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
})

/*-------------------------------------------------------*/ 

$(function(){
    new WOW().init();
    $("#block").fadeIn('slow');
    $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.up_scroll').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('.up_scroll').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
      $('.up_scroll').click(function(){
        $('html').animate({scrollTop:0});
      });
 });
