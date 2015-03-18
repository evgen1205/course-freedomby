var slideWidth=1050;
var sliderTimer;
$(function(){
    $('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,4500);
    $('.slider').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide,4500);
    });

    $('#next_slide').click(function(){
        nextSlide();
    });
    $('#prev_slide').click(function(){
        prevSlide();
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth);
        $('.slidewrapper').append($('.slidewrapper').children().first().clone());
        $('.slidewrapper').children().first().remove();
        currentSlide--;
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},900).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        $('.slidewrapper').css('left',-(currentSlide+2)*slideWidth);
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone());
        $('.slidewrapper').children().last().remove();
        currentSlide++;
    }
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},900).data('current',currentSlide);
}