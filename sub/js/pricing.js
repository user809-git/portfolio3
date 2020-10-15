$(function () {
    let detailImg = $(".imgViewer>ul>li");
    let current = 0,
        setIntervalId = 0;
    let isWork = false;

    imgFadeIn();
    function imgFadeIn() {
        if (setIntervalId == 0) {
            setIntervalId = setInterval(function () {
                if (!isWork) {
                    current++;
                    if (current == detailImg.length) current = 0;

                    let currentList = detailImg.eq(current);
                    detailImg.removeClass('on');
                    detailImg.eq(current).addClass('on');
                }
            }, 1300);
        }
    };

    function pause() {
        $(".pauseIcon").stop().fadeIn(300);
    }

    function play() {
        $(".pauseIcon").stop().fadeOut(300);
    }

    $(".imgViewer li").on({
        mouseenter: function () {
            pause();
            clearInterval(setIntervalId);
            isWork = true;
        },
        mouseleave: function () {
            play();
            setIntervalId = 0;
            imgFadeIn();
            isWork = false;
        }
    });
});