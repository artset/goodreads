$( "#sidebar__link__personal" ).click(function() {
  $(".feed__discover").css("display", "none");
  $(".feed__personal").css("display", "block");
  $(".feed__newsfeed").css("display", "none");
  // $("#sidebar__link__personal").css("border-right", "3px solid #F6BD60");
});

$( "#sidebar__link__discover" ).click(function() {
  $(".feed__discover").css("display", "block");
  $(".feed__personal").css("display", "none");
  $(".feed__newsfeed").css("display", "none");
  // $("#sidebar__link__discover").css("border-right", "3px solid #F6BD60");
});

$( "#sidebar__link__newsfeed" ).click(function() {
  $(".feed__discover").css("display", "none");
  $(".feed__personal").css("display", "none");
  $(".feed__newsfeed").css("display", "block");
  // $("#sidebar__link__newsfeed").css("border-right", "3px solid #F6BD60");

});

