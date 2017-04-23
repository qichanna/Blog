;$(function () {
    'user strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        backButton = $('.back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');
    
    function showSideBar() {
        mask.fadeIn();
        // sidebar.animate({'right':0});
        sidebar.css('right',0);
        //css3方法
        // sidebar.css('transform','translate(0,0)');
    }

    function hideSideBar() {
        mask.fadeOut();
        // sidebar.animate({'right':0});
        sidebar.css('right',-sidebar.width());
        //css3方法
        // sidebar.css('transform','translate('+sidebar.width()+'px,0)');
    }
    
    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
    backButton.on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },800)
    });
    $(window).on("scroll",function () {
        if($(window).scrollTop() > $(window).height()/2){
            backButton.fadeIn();
        }else {
            backButton.fadeOut();
        }
    })

    $(window).trigger('scroll');
})