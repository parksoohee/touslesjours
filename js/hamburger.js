$(function () {
  $("#hamburger").click(function () {
    if ($("#burger").hasClass("on")) {
      $("#burger").removeClass("on");
      $("#ham_slide").removeClass("on");
    } else {
      $("#burger").addClass("on");
      $("#ham_slide").addClass("on");
    }
  });
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        ); //움직이는 시간 조정
        return false;
      }
    }
  });
});

$(function(){
  /*#gnb>li에 마우스를 올리면 그 li 안에 있는 .sub가 슬라이드되서 내려오고,
  #gnb>li에서 마우스가 나가면 내려와있던 .sub가 슬라이드되서 올라간다.*/
  $('.nav>li').mouseenter(function(){
      $(this).children('.sub_menu').stop().slideDown(300);
      /*stop부분을 넣지 않으면 슬라이드다운되서 내려오는 중에 마우스가 나가면 sub혼자 움직이는 현상이 발생하므로 마우스가 도중에 나갈 때 행동이 취소 될 수 있게 한다.*/
  });
  $('.nav>li').mouseleave(function(){
      $(this).children('.sub_menu').stop().slideUp(300);/*괄호 안에 숫자 넣으면 부드럽게 움직여진다.*/
  });
});/*이 부분은 기본구조 끝 부분이므로 뒤에 코드를 추가할 때 이 안쪽으로 넣는다.*/
