$(function() {
    gsap.registerPlugin(ScrollTrigger);

    // function initScroller() {
    //     // 기존 ScrollTrigger와 Swiper 인스턴스 제거
    //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // 미디어 쿼리에 따라 Swiper와 ScrollTrigger 설정
        ScrollTrigger.matchMedia({
            '(min-width: 1080px)': function() {
                // 데스크톱에서는 GSAP 가로 스크롤을 적용
                let list = gsap.utils.toArray('#brandstory .brandstory_in .img_slide_wrap_1 .img_slide li');
                gsap.to(list, {
                    xPercent: -100 * (list.length - 1.5),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '#brandstory',
                        pin: true,
                        scrub: 1,
                        start: 'center center',
                        end: '300%',
                    }
                });
            }
        });
    // }

    // 초기 로드 및 리사이즈 이벤트에서 initScroller 실행
    // initScroller();
    // $(window).on('resize', function() {
    //     initScroller();
    //     ScrollTrigger.refresh(); // 리사이즈 후 ScrollTrigger를 업데이트합니다
    // });

});
