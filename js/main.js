$(function(){
    
    let scrollY = 0,
        prevScrollY = 0,
        currentSection = 0,
        enterNewSection = false,
        delayedScrollY = 0;
    let $window = $(window),
        $container = $(".container");
    
    const sectionInfo = [ // 오브켁트 정보 저장
        {
            //.sec0
            type:'sticky',
            heightNum: 1,
            scrollHeight:0,
            objects: {
                section: $(".sec0"),
                title: $(".sec0 .mainText"),
                mainImg: $(".sec0 .large-top")
            },
            values: {
                title_move: [0, 82, { start: 0, end: 0.5 }],
                mainImg_move: [0, 41, { start: 0, end: 0.5 }]
            }
        },
        {
            //.sec1
            type:'sticky',
            heightNum: 3,
            scrollHeight:0,
            objects: {
                section: $(".sec1"),
                title: $(".sec1 .descTit"), 
                text: $(".sec1 .descText"),
                mainImg: $(".sec1 .large-image"),
                screen: $(".sec1 .large-image .screen")
                
            },
            values: {
                //title
                title_move_in: [50, 0, { start: 0, end: 0.1 }],
                title_move_out: [0, -50, { start: 0.9, end: 1 }],
                title_opacity_in: [0, 1, { start: 0, end: 0.02 }],
                title_opacity_out: [1, 0, { start: 0.95, end: 0.98 }],
                //text
                text_move: [100, 0, { start: 0.2, end: 0.3 }],
                text_opacity_in: [0, 1, { start: 0.2, end: 0.25 }],
                text_opacity_out: [1, 0, { start: 0.96, end: 0.99 }],
                //mainImg : hand+screen
                mainImg_rotate: [90, 0, { start: 0.4, end: 0.7 }],
                mainImg_opacity_in: [0, 1, { start: 0.45, end: 0.5 }],
                mainImg_opacity_out: [1, 0, { start: 0.97, end: 1 }]
            }
        },
        {
            //.sec2
            type:'sticky',
            heightNum: 3,
            scrollHeight:0,
            objects: {
                section: $(".sec2"),
                title: $(".sec2 .descTit"),
                text: $(".sec2 .descText"),
                mainImg: $(".sec2 .large-image"),
                background: $(".sec2 .latge-image .background"),
                cloud1: $(".sec2 .large-image .cloud1"),
                cloud2: $(".sec2 .large-image .cloud2"),
                cloud3: $(".sec2 .large-image .cloud3"),
                cloud4: $(".sec2 .large-image .cloud4"),
                cloud5: $(".sec2 .large-image .cloud5"),
                kid: $(".sec2 .large-image .kid")
            },
            values: {
                //title
                title_move_in: [50, 0, { start: 0, end: 0.1 }],
                title_move_out: [0, -50, { start: 0.9, end: 1 }],
                title_opacity_in: [0, 1, { start: 0, end: 0.02 }],
                title_opacity_out: [1, 0, { start: 0.95, end: 0.98 }],
                //text
                text_move: [100, 0, { start: 0.2, end: 0.3 }],
                text_opacity_in: [0, 1, { start: 0.2, end: 0.25 }],
                text_opacity_out: [1, 0, { start: 0.96, end: 0.99 }],
                //clouds
                cloud1_moveX: [0, 35, { start: 0.4, end: 0.7 }],
                cloud1_moveY: [0, -90, { start: 0.4, end: 0.7 }],
                cloud1_scale: [0, 0.75, { start: 0.4, end: 0.7 }],
                cloud2_moveX: [0, 20, { start: 0.41, end: 0.71 }],
                cloud2_moveY: [0, -75, { start: 0.41, end: 0.71 }],
                cloud2_scale: [0, 0.78, { start: 0.41, end: 0.71 }],
                cloud3_moveX: [0, -15, { start: 0.45, end: 0.75 }],
                cloud3_moveY: [0, -80, { start: 0.45, end: 0.75 }],
                cloud3_scale: [0, 0.7, { start: 0.45, end: 0.75 }],
                cloud4_moveX: [0, -5, { start: 0.5, end: 0.8 }],
                cloud4_moveY: [0, -35, { start: 0.5, end: 0.8 }],
                cloud4_scale: [0, 0.4, { start: 0.5, end: 0.8 }],
                cloud5_moveX: [0, 15, { start: 0.55, end: 0.85 }],
                cloud5_moveY: [0, -75, { start: 0.55, end: 0.85 }],
                cloud5_scale: [0, 0.45, { start: 0.55, end: 0.85 }],
                mainImg_opacity_in: [0, 1, { start: 0.35, end: 0.4 }],
                mainImg_opacity_out: [1, 0, { start: 0.97, end: 1 }]
            }
        },
        {
            //.sec3
            type:'sticky',
            heightNum: 3,
            scrollHeight:0,
            objects: {
                section: $(".sec3"),
                title: $(".sec3 .descTit"),
                text: $(".sec3 .descText"),
                mainImg: $(".sec3 .large-image"),
                character: $(".sec3 .large-image .character"),
                cursor: $(".sec3 .large-image .cursor")
            },
            values: {
                //title
                title_move_in: [50, 0, { start: 0, end: 0.1 }],
                title_move_out: [0, -50, { start: 0.9, end: 1 }],
                title_opacity_in: [0, 1, { start: 0, end: 0.02 }],
                title_opacity_out: [1, 0, { start: 0.95, end: 0.98 }],
                //text
                text_move: [100, 0, { start: 0.2, end: 0.3 }],
                text_opacity_in: [0, 1, { start: 0.2, end: 0.25 }],
                text_opacity_out: [1, 0, { start: 0.96, end: 0.99 }],
                //character
                character_images: [0, 85, { start: 0.4, end: 0.97 }],
                cursor_move_1: [0, -700, { start: 0.4, end: 0.50 }],
                cursor_move_2: [-700, 500, { start: 0.53, end: 0.79 }],
                cursor_move_3: [500, -200, { start: 0.83, end: 0.97 }],
                mainImg_opacity_in: [0, 1, { start: 0.35, end: 0.4 }],
                mainImg_opacity_out: [1, 0, { start: 0.97, end: 1 }]
            }
        },
        {
            //.sec4
            type:'normal',
            heightNum: 2,
            scrollHeight:0,
            objects: {
                section: $(".sec4"),
                box: $(".sec4 .innerBox")
            },
            values: {
                box_opacity: [0, 1, { start: 0, end: 0.05 }],
                box_move: [0, -200, { start: 0.2, end: 0.5 }]
            }
        }
    ];
    
    function setLayout() {
        for (let i = 0; i < sectionInfo.length; i++){
            if (sectionInfo[i].type === 'sticky') {
                sectionInfo[i].scrollHeight = sectionInfo[i].heightNum * $window.innerHeight();
            } else {
                sectionInfo[i].scrollHeight = sectionInfo[i].objects.section.innerHeight();
            }
            sectionInfo[i].objects.section.css({'height' : `${sectionInfo[i].scrollHeight}px`});
        }
        
        scrollY = $window.scrollTop();
        
        let totalScrollHeight = 0;
        for (let i = 0; i < sectionInfo.length; i++) {
            totalScrollHeight += sectionInfo[i].scrollHeight;
            if (totalScrollHeight >= scrollY) {
                currentSection = i;
                break;
            }
        }
        $container.attr('id', `show-section-${currentSection}`);
    } /* setLayout */
    
    function calcValues(values, currentScrollY) {
        let result;
        
        const scrollHeight = sectionInfo[currentSection].scrollHeight,
              scrollRatio = currentScrollY / scrollHeight;
        
        if (values.length === 3) {
            const scrollStart = values[2].start * scrollHeight,
                  scrollEnd = values[2].end * scrollHeight,
                  scrollDuration = scrollEnd - scrollStart;
            if (currentScrollY >= scrollStart && currentScrollY <= scrollEnd) {
                result = (currentScrollY - scrollStart) / scrollDuration * (values[1] - values[0]) + values[0];
            } else if (currentScrollY < scrollStart) {
                result = values[0];
            } else if (currentScrollY > scrollEnd) {
                result = values[1];
            }
        } else {
            result = scrollRatio * (values[1] - values[0]) + values[0];
        }
        
        return result;
    } /* calcValues */
    
    function moveObjects() {
        const objs = sectionInfo[currentSection].objects,
		      values = sectionInfo[currentSection].values,
		      currentScrollY = scrollY - prevScrollY,
		      scrollHeight = sectionInfo[currentSection].scrollHeight,
		      scrollRatio = currentScrollY / scrollHeight;
//        console.log(scrollRatio);
        switch (currentSection) {
            case 0:
                // console.log('.sec0');
                objs.title.css('transform', `translate3d(0, ${calcValues(values.title_move, currentScrollY)}%, 0)`);
                objs.mainImg.css('transform', `translate3d(0, ${calcValues(values.mainImg_move, currentScrollY)}%, 0)`);
                break;
                
            case 1:
                // console.log('.sec1');
                if (scrollRatio < 0.5) {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_in, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_in, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'transform': `translate3d(0, ${calcValues(values.text_move, currentScrollY)}%, 0`,
                        'opacity': calcValues(values.text_opacity_in, currentScrollY)
                    });
                    objs.mainImg.css({'opacity': calcValues(values.mainImg_opacity_in, currentScrollY)});
                } else {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_out, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_out, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'opacity': calcValues(values.text_opacity_out, currentScrollY)
                    });
                    objs.mainImg.css({'opacity': calcValues(values.mainImg_opacity_out, currentScrollY)});
                }
                objs.mainImg.css({
                    'transform': `rotate(${calcValues(values.mainImg_rotate, currentScrollY)}deg)`
                });
                if (scrollRatio >= 0.7) {
                    objs.screen.show();
                } else objs.screen.hide();
                break;
                
            case 2:
                // console.log('.sec2');
                if (scrollRatio < 0.5) {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_in, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_in, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'transform': `translate3d(0, ${calcValues(values.text_move, currentScrollY)}%, 0`,
                        'opacity': calcValues(values.text_opacity_in, currentScrollY)
                    });
                    objs.mainImg.css({
                        'opacity': calcValues(values.mainImg_opacity_in, currentScrollY)
                    });
                } else {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_out, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_out, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'opacity': calcValues(values.text_opacity_out, currentScrollY)
                    });
                    objs.mainImg.css({
                        'opacity': calcValues(values.mainImg_opacity_out, currentScrollY)
                    });
                }
                //clouds
                objs.cloud1.css({
                    'transform':
                    `translate3d(${calcValues(values.cloud1_moveX, currentScrollY)}%, ${calcValues(values.cloud1_moveY, currentScrollY)}%, 0)
                    scale(${calcValues(values.cloud1_scale, currentScrollY)})`
                });
                objs.cloud2.css({
                    'transform':
                    `translate3d(${calcValues(values.cloud2_moveX, currentScrollY)}%, ${calcValues(values.cloud2_moveY, currentScrollY)}%, 0)
                    scale(${calcValues(values.cloud2_scale, currentScrollY)})`
                });
                objs.cloud3.css({
                    'transform':
                    `translate3d(${calcValues(values.cloud3_moveX, currentScrollY)}%, ${calcValues(values.cloud3_moveY, currentScrollY)}%, 0)
                    scale(${calcValues(values.cloud3_scale, currentScrollY)})`
                });
                objs.cloud4.css({
                    'transform':
                    `translate3d(${calcValues(values.cloud4_moveX, currentScrollY)}%, ${calcValues(values.cloud4_moveY, currentScrollY)}%, 0)
                    scale(${calcValues(values.cloud4_scale, currentScrollY)})`
                });
                objs.cloud5.css({
                    'transform':
                    `translate3d(${calcValues(values.cloud5_moveX, currentScrollY)}%, ${calcValues(values.cloud5_moveY, currentScrollY)}%, 0)
                    scale(${calcValues(values.cloud5_scale, currentScrollY)})`
                }); // 위치 조정
                
                break;
                
            case 3:
                // console.log('.sec3');
                if (scrollRatio <= 0.5) {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_in, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_in, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'transform': `translate3d(0, ${calcValues(values.text_move, currentScrollY)}%, 0`,
                        'opacity': calcValues(values.text_opacity_in, currentScrollY)
                    });
                    objs.mainImg.css({
                        'opacity': calcValues(values.mainImg_opacity_in, currentScrollY)
                    });
                    objs.cursor.css({
                        'transform': `translate3d(${calcValues(values.cursor_move_1, currentScrollY)}%, 0, 0)`
                    });
                    
                } else if (scrollRatio > 0.5 && scrollRatio < 0.8) {
                    objs.cursor.css({
                        'transform': `translate3d(${calcValues(values.cursor_move_2, currentScrollY)}%, 0, 0)`
                    });
                    
                } else if (scrollRatio >= 0.8) {
                    objs.title.css({
                        'opacity': calcValues(values.title_opacity_out, currentScrollY),
                        'transform': `translate3d(0, ${calcValues(values.title_move_out, currentScrollY)}%, 0)`
                    });
                    objs.text.css({
                        'opacity': calcValues(values.text_opacity_out, currentScrollY)
                    });
                    objs.mainImg.css({
                        'opacity': calcValues(values.mainImg_opacity_out, currentScrollY)
                    });
                    objs.cursor.css({
                        'transform': `translate3d(${calcValues(values.cursor_move_3, currentScrollY)}%, 0, 0)`
                    });
                }
                objs.character.attr('src',
                   `src/character/cha_${000 + parseInt(calcValues(values.character_images, currentScrollY))}.jpg`);
                break;
            case 4:
                objs.box.css({
                    'opacity': calcValues(values.box_opacity, currentScrollY),
                    'transform': `translate3d(0, ${calcValues(values.box_move, currentScrollY)}px, 0)`
                });
        }
    } /* moveObjects */
    
    function scrollLoop() {
        enterNewSection = false;
        prevScrollY = 0;
        delayedScrollY += (scrollY - delayedScrollY) * 0.2;
        
        for (let i =0; i < currentSection; i++) {
            prevScrollY += sectionInfo[i].scrollHeight;
        }
        
        if (delayedScrollY > prevScrollY + sectionInfo[currentSection].scrollHeight) {
            enterNewSection = true;
            currentSection++;
            $container.attr('id', `show-section-${currentSection}`);
        }
        if (delayedScrollY < prevScrollY) {
            enterNewSection = true;
            if (currentSection === 0) return;
            currentSection--;
            $container.attr('id', `show-section-${currentSection}`);
        }
        
        if (enterNewSection) return;
        moveObjects();
    } /* scrollLoop */
    
    $window.on('load', function(){
        // !! 새로고침 시 스크롤해야만 보이는 현상 고치기
        // 새로고침 할 때마다 스크롤 0으로 만들기 or (...)
        //window.scrollTo(0, 0);
        setLayout();
        $(this).on({
            resize: setLayout(),
            scroll: function() {
                scrollY = $window.scrollTop();
                scrollLoop();
            }
        });
    });
    // IE 오류 고치기 - crossbrowsing
});