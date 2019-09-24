$(document).ready(function () {
  // $('#mysql').click(function (e) {
  //   event.preventDefault();
  // });

  // $("body").click(function (event) {
  //   $("#log").html("Clicked a " + event.target.nodeName);
  // });

  // var lastt, tdiff;
  // $("p").click(function (event) {
  //   if (lastt) {
  //     tdiff = event.timeStamp - lastt;
  //     $("div").append("Time since last event: " + tdiff + "<br>");
  //   }
  //   else {
  //     $("div").append("<br>Click again.<br>");
  //   }
  //   lastt = event.timeStamp;
  // });

  // $("h1").click(function(event) {
  //   $("div").append(event.type); // "click"
  // });

  // $("input").keydown(function(event) {
  //   $("div").html(event.type + ": " + event.which);
  // });

  // $("input").focus(function() {
  //   $(this).next("span").css("display","inline").fadeOut(8000);
  // });

  // $("#content").delegate("*", "focus blur",function() {
  //   var elem = $(this);
  //     elem.toggleClass("focused", elem.is(":focus"));
  // });

  // $("p")
  // .mouseup(function() {
  //   $(this).append("Mouse up.");
  // })
  // .mousedown(function() {
  //   $(this).append("Mouse down");
  // });

  $(window).resize(function() {
    $("body").prepend("<div>" + $(window).width() + "</div>");
  });
});  