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
