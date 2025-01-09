document.addEventListener('DOMContentLoaded', function () {
  var tabSliders = document.querySelectorAll('.tab-content-slider');

  tabSliders.forEach(function (slider, index) {
    var sliderId = index + 1;
    var Swiper3 = new Swiper(slider, {
      observer: true,
      observeParents: true,
      loop:true,
      slidesPerView: 1.5,
      spaceBetween: 58,
      breakpoints: {
        480: {
          slidesPerView: 2.3,
          spaceBetween: 58,
        },
        540: {
          slidesPerView: 3,
          spaceBetween: 58,
        },
        760: {
          slidesPerView: 3.5,
          spaceBetween: 58,
        },
        900: {
          slidesPerView: 4.3,
          spaceBetween: 58,
        },
        1080: {
            slidesPerView: 5,
            spaceBetween: 40,
        }
    }    
    });
  });

  document.querySelectorAll('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelector('.tab.active').classList.remove('active');
      this.classList.add('active');
      var targetSliderId = this.getAttribute('data-tab');
      tabSliders.forEach(function (slider) {
        slider.style.display = slider.getAttribute('data-slider') === targetSliderId ? 'block' : 'none';
        slider.swiper.update();
      });
    });
  });
});