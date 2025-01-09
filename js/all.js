let isSwiperInitialized = false;
let swiper4Instance;

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  function initSwiper() {
    if (isSwiperInitialized) return; // 이미 초기화된 경우 중복 실행 방지

    // 기존 Swiper와 ScrollTrigger 초기화
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (window.swiperInstance) window.swiperInstance.destroy(true, true);

    // 스타트업 스와이퍼 초기화
    window.swiperInstance = new Swiper(".event_swiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      spaceBetween: 8,
      slidesPerView: 1.2,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.6,
          centeredSlides: true,
          spaceBetween: 10,
        },
        1081: {
          slidesPerView: 1.6,
          spaceBetween: 16,
          centeredSlides: false
        },
        1321: {
          slidesPerView: 1.6,
          spaceBetween: 24,
          centeredSlides: false
        },
        1621: {
          slidesPerView: 1.6,
          spaceBetween: 24,
          centeredSlides: false
        },
      },
      on: {
        slideChange: function () {
          const realidx = this.realIndex;  // 현재 슬라이드의 인덱스를 가져옴
          $('.event_title_text').hide();  // 모든 텍스트를 숨김
          $('.event_title_text').eq(realidx).show();  // 현재 슬라이드에 해당하는 텍스트만 보이게 설정
        }
      },
    });

    isSwiperInitialized = true;
  }

  // 스타트업 스와이퍼 초기화
  function initStartupSwiper() {
    if (swiper4Instance) return; // 이미 초기화된 경우 중복 실행 방지

    swiper4Instance = new Swiper(".startup_swiper", {
      slidesPerView: 1.2,
      spaceBetween: 8,
      centeredSlides: true,
      loop: true,
    });
  }

  // 리사이즈 이벤트에서 Swiper 초기화 및 ScrollTrigger 갱신
  window.addEventListener('resize', function () {
    if (isSwiperInitialized) {
      ScrollTrigger.refresh(); // 리사이즈 후 ScrollTrigger 업데이트
      initSwiper(); // Swiper 초기화
    }
  });

  // Swiper 초기화
  initSwiper();
  initStartupSwiper(); // 화면 크기와 관계없이 스타트업 스와이퍼 항상 활성화

  // 미디어 쿼리에 따라 Swiper와 ScrollTrigger 설정
  ScrollTrigger.matchMedia({
    '(min-width: 1080px)': function () {
      // 데스크톱에서는 GSAP 가로 스크롤을 적용
      let list = gsap.utils.toArray('#brandstory .brandstory_in .img_slide_wrap .img_slide li');
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

      // 1080px 이상일 때만 'big' 클래스 활성화
      const boxes = document.querySelectorAll('.box_img');
      let selectedBox = boxes[0]; // 초기 선택된 이미지를 첫 번째 이미지로 설정

      // 초기화: 첫 번째 요소에 big 클래스 추가
      selectedBox.classList.add('big');

      // 클릭 이벤트 설정
      boxes.forEach(box => {
        box.addEventListener('click', function () {
          if (selectedBox) {
            selectedBox.classList.remove('big');
          }
          selectedBox = this;
          this.classList.add('big');
        });
      });

      // 호버 이벤트 설정
      boxes.forEach(box => {
        box.addEventListener('mouseenter', function () {
          if (selectedBox) {
            selectedBox.classList.remove('big'); // 기존 선택된 이미지에서 big 제거
          }
          if (!this.classList.contains('big')) {
            this.classList.add('hovered'); // 호버한 이미지에만 확대 효과 추가
          }
        });

        box.addEventListener('mouseleave', function () {
          this.classList.remove('hovered'); // 호버가 끝나면 hovered 클래스 제거
          if (selectedBox) {
            selectedBox.classList.add('big'); // 이전에 선택된 이미지에 big 다시 추가
          }
        });
      });
    },
    '(max-width: 1079px)': function () {
      // 모바일에서는 Swiper를 적용
      if (!window.swiper2Instance) {
        window.swiper2Instance = new Swiper('.img_slide_wrap', {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 1.2,  // 여러 슬라이드가 보이도록 설정
          spaceBetween: 8,       // 슬라이드 간 간격을 설정
          centeredSlides: true,   // 슬라이드가 가운데 정렬되도록 설정
          breakpoints: {
            640: {  // 모바일
              slidesPerView: 2.3,
              spaceBetween: 12,
            }
          }
        });
      }
    }
  });

  // 섹션 크기 조정
  function adjustSections() {
    const section1 = document.querySelector('.event_in');
    const section2 = document.querySelector('.store_in');
    const section3 = document.querySelector('.brandstory_in');
    const windowWidth = window.innerWidth;

    // 섹션 1과 3의 고정된 너비 (1620px)
    const section1Width = 1620;
    const section3Width = 1620;

    // 섹션 2의 고정된 너비 (1320px)
    const section2Width = 1300;

    if (windowWidth > 1340) {
      const section2Margin = (windowWidth - section2Width) / 2;

      let section1WidthAdjusted = section1Width;
      let section3WidthAdjusted = section3Width;

      if (windowWidth <= 1620) {
        section1WidthAdjusted = (windowWidth / 1920) * section1Width;
        section3WidthAdjusted = (windowWidth / 1920) * section3Width;
      }

      // 섹션 1과 3의 너비를 여백을 빼고 꽉 차게 설정
      section1.style.width = `${windowWidth - section2Margin}px`;
      section3.style.width = `${windowWidth - section2Margin}px`;
    }
  }

  // 페이지 로드 시 및 창 크기 조정 시 실행
  window.addEventListener('load', adjustSections);
  window.addEventListener('resize', adjustSections);

  // 탭 슬라이더 초기화
  document.querySelectorAll('.tab-content-slider').forEach(function (slider, index) {
    const sliderId = index + 1;
    const Swiper3 = new Swiper(slider, {
      observer: true,
      observeParents: true,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 58,
      breakpoints: {
        480: { 
          slidesPerView: 2.3, spaceBetween: 58 
        },
        540: { 
          slidesPerView: 3, spaceBetween: 58 
        },
        760: { 
          slidesPerView: 3.5, spaceBetween: 58 
        },
        900: { 
          slidesPerView: 4.3, spaceBetween: 58 
        },
        1080: { 
          slidesPerView: 5, spaceBetween: 40 
        }
      }
    });
  });

  // 탭 클릭 이벤트
  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelector('.tab.active').classList.remove('active');
      this.classList.add('active');
      const targetSliderId = this.getAttribute('data-tab');
      document.querySelectorAll('.tab-content-slider').forEach(function (slider) {
        slider.style.display = slider.getAttribute('data-slider') === targetSliderId ? 'block' : 'none';
        slider.swiper.update();
      });
    });
  });

});
