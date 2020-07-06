$(document).ready(function () {

  $("#nav div").click(function(){
    $("#nav div").removeClass("show");
    $(this).addClass("show");
    var posizione= $(this).index();

    $("#imgCollum img.show").removeClass("show");
    $("#imgCollum img").eq(posizione).addClass("show");

  });
});
