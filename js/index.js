$(function(){
    
    let $window = $(window),
        container = $(".container"),
        wrapper = container.children(".wrapper"),
        section = wrapper.children("section");
    let prevPage = $("nav .prevPage"),
        nextPage = $("nav .nextPage");
    let current = 0,
        sectionLength = container.children(".wrapper").children("section").length;
    
    prevPage.click(function(){
        current--;
        if (current < 0) {
            current = 0;
            return
        }
        pageTurnner(current);
        nextPage.removeClass('off');
        if (current == 0) $(this).addClass('off');
    });
    nextPage.click(function(){
        current++;
        if (current > sectionLength-1) {
            current = sectionLength-1;
            return
        }
        pageTurnner(current);
        prevPage.removeClass('off');
        if (current == sectionLength-1) $(this).addClass('off');
    });
        
    function pageTurnner(current) {
        if (current < 0 || current > sectionLength -1) return;
        
        var sectionHeight = -1 * current * 100;
        container.attr("id", 'show-section-' + current);
        $(".navProgress").css({'height': (current+1) * 20 + '%'});
    }
    
    const sec2back = $(".sec2 .effect"),
          sec2colors = sec2back.find(".chips > div");
    let sec2guide = sec2back.find(".guideLine");
    sec2colors.click(function(){
        sec2guide.hide();
        if ( $(this).hasClass('purple') ) {
            sec2colors.show();
            $(this).hide();
            sec2back.removeClass('blue red').addClass('purple');
        }
        if ( $(this).hasClass('blue') ) {
            sec2colors.show();
            $(this).hide();
            sec2back.removeClass('purple red').addClass('blue');
        }
        if ( $(this).hasClass('red') ) {
            sec2colors.show();
            $(this).hide();
            sec2back.removeClass('blue purple').addClass('red');
        }
    });
    
    function setLayout() {
        $window.scrollTop(0);
        container.attr("id","show-section-0");
//        section.css('height', '100vh');
    };
    
    $window.on({
        load: setLayout(),
        resize: setLayout()
    });
});