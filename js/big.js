const boxes = document.querySelectorAll('.box_img');

let selectedBox;
if (boxes.length > 0) {  // boxes가 비어있지 않은 경우에만 실행
  selectedBox = boxes[0];
  selectedBox.classList.add('big'); // 초기화: 첫 번째 요소에 big 클래스 추가
}

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