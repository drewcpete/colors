$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("button#silver").click(function() {
    $("body").removeClass();
    $("body").addClass("silver-background");
  });
  $("button#brown").click(function() {
    $("body").removeClass();
    $("body").addClass("brown-background");
  });
});
