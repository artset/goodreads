$("#sidebar__link--newsfeed").addClass("active");
$( "#sidebar__link--personal" ).click(function() {
  $(".feed__discover").css("display", "none");
  $(".feed__personal").css("display", "block");
  $(".feed__newsfeed").css("display", "none");
  $("#sidebar__link--personal").addClass("active");
  $("#sidebar__link--discover").removeClass("active");
  $("#sidebar__link--newsfeed").removeClass("active");
});

$( "#sidebar__link--discover" ).click(function() {
  $(".feed__discover").css("display", "block");
  $(".feed__personal").css("display", "none");
  $(".feed__newsfeed").css("display", "none");
  $("#sidebar__link--personal").removeClass("active");
  $("#sidebar__link--discover").addClass("active");
  $("#sidebar__link--newsfeed").removeClass("active");
});

$( "#sidebar__link--newsfeed" ).click(function() {
  $(".feed__discover").css("display", "none");
  $(".feed__personal").css("display", "none");
  $(".feed__newsfeed").css("display", "block");
  $("#sidebar__link--personal").removeClass("active");
  $("#sidebar__link--discover").removeClass("active");
  $("#sidebar__link--newsfeed").addClass("active");
});

