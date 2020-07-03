$(document).ready(function () {
  var imgList = [$(".1"),$(".2"),$(".3"),$(".4")];

  $("#nav div").click(function(){
    var selected = $(this);

    if (selected.hasClass(1)) {
      $("#nav div").removeClass("show");
      selected.addClass("show");
      $("#imgCollum img.show").removeClass("show");
      $("#imgCollum .1").addClass("show");
    } else if (selected.hasClass(2)) {
      $("#nav div").removeClass("show");
      selected.addClass("show");
      $("#imgCollum img.show").removeClass("show");
      $("#imgCollum .2").addClass("show");
    } else if (selected.hasClass(3)) {
      $("#nav div").removeClass("show");
      selected.addClass("show");
      $("#imgCollum img.show").removeClass("show");
      $("#imgCollum .3").addClass("show");
    } else {
      $("#nav div").removeClass("show");
      selected.addClass("show");
      $("#imgCollum img.show").removeClass("show");
      $("#imgCollum .4").addClass("show");
    }
  });
});
