$(function(){
    
    let windowH = $(window).innerHeight(),
        scrollY = $(window).scrollTop();
    let innerImg = [
        {
            box: $(".sec1 .inner").eq(0).children(".innerImg"),
            img: $(".sec1 .inner").eq(0).children(".innerImg").children("img"),
            top: '',
            end: ''
        },
        {
            box: $(".sec1 .inner").eq(1).children(".innerImg"),
            img: $(".sec1 .inner").eq(1).children(".innerImg").children("img"),
            top: '',
            end: ''
        },
        {
            box: $(".sec1 .inner").eq(2).children(".innerImg"),
            img: $(".sec1 .inner").eq(2).children(".innerImg").children("img"),
            top: '',
            end: ''
        }
    ];
    
    (function setOffset() {
        for (let i = 0; i < innerImg.length; i++) {
            innerImg[i].top = innerImg[i].box.offset().top;
            innerImg[i].end = innerImg[i].box.offset().top + innerImg[i].box.innerHeight();
        }
    })();
    
    $(window).scroll(function(){
        
        scrollY = $(window).scrollTop();
        let scrollRatio = scrollY / windowH;
        let value = 0;
        if (scrollY > 0 && scrollY < $(".sec0").innerHeight()) {
            scrollRatio = scrollY / $(".sec0").innerHeight();
            value = 50 * scrollRatio;
            $(".sec0").children(".inner").css({
                'background-position': `50% ${50 +value}%`
            });
        }
        
        value = scrollRatio * 5 - 2.5;
        if (scrollY+windowH >= innerImg[0].top && scrollY <= innerImg[0].end) {
            innerImg[0].img.css({ 'top': `${2.5 - value}%` });
        }
        if (scrollY+windowH >= innerImg[1].top && scrollY <= innerImg[1].end) {
            innerImg[1].img.css({ 'top': `${value}%` });
        }
        if (scrollY+windowH >= innerImg[2].top && scrollY <= innerImg[2].end) {
            console.log(value);
            innerImg[2].img.css({ 'top': `${value}%` });
        }
    });
    
});