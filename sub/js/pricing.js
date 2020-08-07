$(function(){
    let detailImg = $(".imgViewer>ul>li");
    let current = 0,
        setIntervalId = 0;
    let isWork = false;
    
    imgFadeIn();
    function imgFadeIn(){
        if (setIntervalId == 0) {
            setIntervalId = setInterval(function(){
                if (!isWork) {
                    current++;
                    if (current == detailImg.length) current = 0;

                    let currentList = detailImg.eq(current);
                    detailImg.removeClass('on');
                    detailImg.eq(current).addClass('on');
                }
            }, 2500);
        }
    
    };
    
    function pause() {
        $(".pauseIcon").fadeIn(300);
        setTimeout(function(){ $(".pauseIcon").fadeOut(300) }, 700);
    }
    
    function play() {
        $(".playIcon").fadeIn(300);
        setTimeout(function(){ $(".playIcon").fadeOut(300) }, 700);
    }
    
    $(".imgViewer li").on({
        mouseenter: function(){
            pause();
            clearInterval(setIntervalId);
            isWork = true;
        },
        mouseleave: function(){
            play();
            setIntervalId = 0;
            imgFadeIn();
            isWork = false;
        }
    });
});