$(function(){
    
    let inner = $(".sec1 .inner");
    const innerImg = [];
    for( let i = 0; i < 3; i++) {
        let tgImg = inner.eq(i).find("> .innerImg .img");
        innerImg.push(tgImg);
    }
    
    let topImg = $(".container .imgBx"),
        topImgPoint = topImg.offset().top;
    let wih = $(window).innerHeight();
    
    $(window).scroll(function() {
        let sct = $(window).scrollTop(),
            scrollY = sct + topImgPoint,
            topImgEnd = topImg.offset().top + topImg.innerHeight(),
            value = topImgEnd - scrollY;
        if (scrollY > topImg.offset().top && scrollY < topImgEnd) {
            if (imgHeight >= topImg.innerHeight()){
                imgHeight = topImg.innerHeight()
            } else if (imgHeight <= 0){
                imgHeight = 0;
            } else imgHeight = value;
            topImg.css({'height': imgHeight + 'px'});
        }
    });
    
    
});