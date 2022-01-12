$(document).ready(function() {
  $("button#blue-mode").click( function() {
    $("body").removeClass()
    $("body").toggleClass("blue");
    $("ul").prepend("<li>You've entered Blue Mode</li>")
    $("ul").children("li").first().click( function() {
      (this).remove();
    })
  });


  $("button#dark-mode").click( function() {
    $("body").removeClass()
    $("body").toggleClass("dark");
    $("ul").prepend("<li>You've entered Dark Mode</li>")
    $("ul").children("li").first().click( function() {
      (this).remove();
    })
  });


  $("button#red-mode").click( function() {
    $("body").removeClass()
    $("body").toggleClass("red");
    $("ul").prepend("<li>You've entered Red Mode</li>")
    $("ul").children("li").first().click( function() {
      (this).remove();
    })
  });


});