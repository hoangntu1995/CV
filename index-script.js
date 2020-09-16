$(window).on('load', function(){
    $('.btn button').on('click', function(){
        $('.sidebar').toggleClass('collapse');
    });
    $('button .fa-sun').on('click',function(){
        $('.content').toggleClass('turn-off');
    })
});