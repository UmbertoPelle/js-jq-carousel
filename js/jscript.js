$(document).ready(function () {
  $("#right").click(next);

  $("#left").click(prev);

  $(document).keydown(pressKey);

});

// -----functions----- //
  function next() {
    var imgShow=$("#imgCollum img.show");
    imgShow.removeClass("show");

    var navShow=$("#nav div.show");
    navShow.removeClass("show");

    if (imgShow.hasClass("last")) {
      $("#imgCollum img.first").addClass("show");
      $("#nav div.first").addClass("show");
    } else {
      imgShow.next().addClass("show");
      navShow.next().addClass("show");
    }
  };

  function prev() {
    var imgShow=$("#imgCollum img.show");
    imgShow.removeClass("show");

    var navShow=$("#nav div.show");
    navShow.removeClass("show");

    if (imgShow.hasClass("first")) {
      $("#imgCollum img.last").addClass("show");
      $("#nav div.last").addClass("show");
    } else {
      imgShow.prev().addClass("show");
      navShow.prev().addClass("show");
    }
  };

  function pressKey() {
    if (event.which == 39||event.keycode == 39) {
      next()
    } else if (event.which == 37||event.keycode == 37) {
      prev()
    }
  };
