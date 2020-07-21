$(document).ready(function(){
    setTimeout(function() {
        $('.popup').addClass('opened');
    }, 1000);
    $('.close').click(function(){
        $('.popup').removeClass('opened');
    });
});