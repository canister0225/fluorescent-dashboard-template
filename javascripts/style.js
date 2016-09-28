//* * * * * * * * * 
//*  @author Iris
//*  
//*  @introduce Exercise for CSS
//*  @source https://dribbble.com/shots/2946436-NUVI-complete-product-overhaul
//* * * * * * * * *

$(function(){

    var cHeight = $('.main').height();
    $('nav').height(cHeight);

    //var diWidth =  screen.width;
    var diWidth =  window.innerWidth;
    var w = $('nav').width();
    if(diWidth<800){
        $('nav').css('left', '-'+w+'px');
    }
    $('.sidebar-btn').click(function(){
        if ($("nav").css('left') == '-'+w+'px'){
            $("nav").animate({ left:'0px' }, w ,'swing');
        }
        else{
            $("nav").animate({ left:'-'+w+'px' }, w ,'swing');
        }
    });


});