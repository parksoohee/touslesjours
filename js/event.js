const eventSwiper = document.querySelector('.event_swiper');
const eventPrev = document.querySelector('.event_prev');
const eventNext = document.querySelector('.event_next');

if (eventSwiper && eventPrev && eventNext) {
  eventSwiper.addEventListener('mouseenter', function() {
    eventPrev.style.opacity = '1';
    eventNext.style.opacity = '1';
  });

  eventPrev.addEventListener('mouseenter', function() {
    eventPrev.style.opacity = '1';
    eventNext.style.opacity = '1';
  });

  eventNext.addEventListener('mouseenter', function() {
    eventPrev.style.opacity = '1';
    eventNext.style.opacity = '1';
  });

  eventSwiper.addEventListener('mouseleave', function() {
    eventPrev.style.opacity = '0';
    eventNext.style.opacity = '0';
  });
}