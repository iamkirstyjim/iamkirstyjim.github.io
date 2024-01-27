/* smooth scroll */
$(document).ready(function () {
  /* Hide 'hide details' buttons in the beginning */
  $("#showLess1").hide();
  $("#showLess2").hide();

  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
    $(".navbar-default a").removeClass("selected");
    $(this).addClass("selected");
  });

  /* clicking 'show details' will turn the button into 'hide details' and vice versa
   * 8 projects in total so 16 buttons.
   */
  $("#viewMore1").click(function () {
    $("#viewMore1").hide();
    $("#showLess1").show();
  });
  $("#showLess1").click(function () {
    $("#viewMore1").show();
    $("#showLess1").hide();
  });
  $("#viewMore2").click(function () {
    $("#viewMore2").hide();
    $("#showLess2").show();
  });
  $("#showLess2").click(function () {
    $("#viewMore2").show();
    $("#showLess2").hide();
  });
});

$(document).on(
  "click.bs.collapse.data-api touchstart.bs.collapse.data-api",
  '[data-toggle="collapse"]',
  function (e) {}
);
