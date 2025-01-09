function adjustSections() {
  const section1 = document.querySelector('.event_in');
  const section2 = document.querySelector('.store_in');
  const section3 = document.querySelector('.brandstory_in');

  /// 창 너비를 가져옵니다
  const windowWidth = window.innerWidth;

  // 섹션 1의 고정된 너비 (1620px)
  const section1Width = 1620;
  const section3Width = 1620;

  // 섹션 2의 고정된 너비 (1320px)
  const section2Width = 1300;

  // 창이 1320px 이상일 때만 JavaScript로 크기 및 여백을 동적으로 조정
  if (windowWidth > 1340) {
    // 섹션 2의 여백 계산 (창 너비에서 섹션 2의 너비를 빼고 2로 나누면 양쪽 여백)
    const section2Margin = (windowWidth - section2Width) / 2;

    // 창 크기가 1620px 이하로 줄어들면 섹션 1의 너비를 비례적으로 줄임
    let section1WidthAdjusted = section1Width;

    if (windowWidth <= 1620) {
      section1WidthAdjusted = (windowWidth / 1920) * section1Width;
      section3WidthAdjusted = (windowWidth / 1920) * section3Width;
    }

    // 섹션 1의 너비를 여백을 빼고 꽉차게 설정
    //section1.style.width = `${windowWidth  - section2Margin}px`;
    //section3.style.width = `${windowWidth  - section2Margin}px`;

  }
  // 모든 Swiper 인스턴스를 업데이트하여 레이아웃을 반영
  if (window.swiper1) window.swiper1.update();
  if (window.swiper2) window.swiper2.update();
}


// 페이지 로드 시 및 창 크기 조정 시 실행
//window.addEventListener('load', adjustSections);
//window.addEventListener('resize', adjustSections);
