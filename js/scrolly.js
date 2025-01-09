document.addEventListener("DOMContentLoaded", function () {
  const hamSlideContent = document.querySelector(".ham_slide_in");
  let scrollPosition = 0;

  hamSlideContent.addEventListener("wheel", function (e) {
    e.preventDefault(); // 기본 스크롤 방지
    scrollPosition += e.deltaY * 0.5; // 스크롤 이동량 조절
    scrollPosition = Math.max(
      0,
      Math.min(scrollPosition, hamSlideContent.scrollHeight - hamSlideContent.clientHeight)
    );
    hamSlideContent.style.transform = `translateY(-${scrollPosition}px)`; // 가상 스크롤 효과
  });
});
