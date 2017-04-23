;$(function () {
    'user strict';

    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#sidebar_trigger');
    
    function showSideBar() {
        mask.fadeIn();
        // sidebar.animate({'right':0});
        sidebar.css('right',0);
    }

    function hideSideBar() {
        mask.fadeOut();
        // sidebar.animate({'right':0});
        sidebar.css('right',-sidebar.width());
    }
    
    sidebar_trigger.on('click',showSideBar);
    mask.on('click',hideSideBar);
})