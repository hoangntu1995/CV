$(window).on('load', function(){
    $('.btn button').on('click', function(){
        $('.sidebar').toggleClass('collapse');
    });
    $('button .fa-moon').on('click',function(){
        $('.content').toggleClass('turn-off');
    })
});