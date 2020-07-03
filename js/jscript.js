$(document).ready(function () {
  $("#right").click(function() {
    next()
  });

  $("#left").click(function() {
    prev()
  });

  $(document).keydown(function(){
    pressKey()
  });

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
}

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
}

  function pressKey() {
    var key=event.which;
    if (key==39) {
      next()
    } else if (key==37) {
      prev()
    }
  }
