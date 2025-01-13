$(document).ready(function(){
    $('.nav-bar').on('click', function(){
        $('.menu-lateral').toggleClass('active');
        $('.nav-bar i').toggleClass('fa-xmark fa-bars-staggered');
    });
});