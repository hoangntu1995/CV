$(window).on('load', function(){
    $('.btn button').on('click', function(){
        $('.sidebar').toggleClass('collapse');
    });
    $('button .fa-sun').on('click',function(){
        $('.content').toggleClass('turn-off');
    })
    $('#dropdown-box1').on('click',function(){
        $(".sub-menu[target='dropdown-box1']").toggleClass('show');
    })
    $('#dropdown-box2').on('click',function(){
        $(".sub-menu[target='dropdown-box2']").toggleClass('show');
    })
});