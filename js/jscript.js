$(document).ready(function () {
  $("#right").click(function() {
    var imgShow=$("#imgCollum img.show");
    imgShow.removeClass("show");

    if (imgShow.hasClass("last")) {
      $("#imgCollum img.first").addClass("show");
    } else {
      imgShow.next().addClass("show");
    }
  });

  $("#left").click(function() {
    var imgShow=$("#imgCollum img.show");
    imgShow.removeClass("show");

    if (imgShow.hasClass("first")) {
      $("#imgCollum img.last").addClass("show");
    } else {
      imgShow.prev().addClass("show");
    }
  });
});
