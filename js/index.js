jQuery('document').ready(function($){
    var menuBtn = $('.navegar'),
        menu = $('.menu ul'),
        menuDeplegado = $('.menu');

    menuBtn.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        };        
    });
    menuDeplegado.click(function(){
        if (menu.hasClass('show')){
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        };
    });        
});