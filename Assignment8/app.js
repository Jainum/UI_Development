$(document).ready(function () {
  // $("#btn1").click(function() {
  //   $("#box").animate({
  //    width: "300px",
  //    height: "300px", 
  //     }, 1500 );
  // });

  // $("#btn2").click(function() {
  //   $("#box").animate({
  //    width: "100px",
  //    height: "100px",    
  //     }, 1500 );
  // });

  // $("button").click(function(){
  //   $("#div1").delay(800).fadeIn();
  //   $("#div2").delay(2400).fadeIn();
  //   $("#div3").delay(4000).fadeIn();
  // });

  // $("button").click(function() {
  //   $("div")
  //   .animate({ left:"+=250px" }, 2000)
  //   .queue(function() {
  //     $(this).toggleClass("new").dequeue();
  //   })
  //   .animate({ left:"-=250px" }, 2000 );
  // });

  //   $("#btn1").click(function(){
  //     $("div").fadeOut(3000);
  //   });
  //    $("#btn2").click(function(){
  //     $("div").fadeIn(3000);
  //   }); 

  // $("p").click(function() {
  //   $(this).fadeTo("slow",0.5);
  // });

  // $("button").click(function(){
  //   $("#div1").fadeToggle();
  //   $("#div2").fadeToggle("slow");
  //   $("#div3").fadeToggle(4000);
  // });

  // $("button").click(function(){
  //   $("p").hide(3000);
  // });

  // $("#enable").click(function(){
  //   jQuery.fx.off = false;
  // }); 

  // $("#disable").click(function(){
  //   jQuery.fx.off = true;
  // });

  // $("#toggle").click(function(){
  //   $("div").toggle("slow");
  // });
  
  $(".btn1").click(function(){
    $("div").slideDown();
  });

  $(".btn2").click(function(){
    $("div").slideUp();
  });
});  