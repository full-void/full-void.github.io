function optimal_em() {
    console.log("Window width", $(window).width());
    let fsz = 1.5 * $(window).width() / 100;
    console.log(fsz);
    if (fsz < 17){
        fsz = 17;
    }
    if (fsz > 21) {
        fsz = 21
    }
    $("body").css("font-size", fsz);
    console.log("The value", $("body").css("font-size"))
}

function scrollFadeIn (){
    $('.zero-opacity').each( function(i){
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();
        var bottom_of_object = top_of_object + $(this).outerHeight();
        var bottom_of_window = top_of_window + $(window).height();
        if( bottom_of_window > top_of_object && top_of_window < bottom_of_object ){
            $(this).addClass('full-opacity');
        }
        else {
            $(this).removeClass('full-opacity');
        }
    });
}

$(document).ready(function() {
    optimal_em();
    scrollFadeIn();
    $(window).scroll(scrollFadeIn);

    $(window).on('resize', optimal_em);
});