$(document).ready(function(){
  // $(".headin").click(function() {
  //   var color = $(this).css("background-color");
  //   $("p").html("That heading is of " + color + ".");
  // });  
  
  // $( "p" ).first().addClass( "highlight" );
  // $( "p" ).last().addClass( "myclass" );

  // $("div").click(function() {
  //   var height = $(this).css("height");
  //   var width = $(this).css("width");
  //   $("p").html("The Height of the element is: " + height + " and Width is: " + width + ".");
  // });
  
  // $(".headin").click(function() {
  //   var height = $(this).css("height");
  //   var width = $(this).css("width");
  //   $("p").html("The Height of the element is: " + height + " and Width is: " + width + ".");
  // });

  $("div").click(function() {
    // $("p").html("The scroll left is: " + $("div").scrollLeft() + " and scroll top is: " + $("div").scrollTop() + ".");
    // $("p").html("The InnerHeight of the element is: " + $("div").innerHeight() + " and InnerWidth is: " + $("div").innerWidth() + ".");
    // $("p").html("The OuterHeight of the element is: " + $("div").outerHeight() + " and OuterWidth is: " + $("div").outerWidth() + ".");
    // $("p").html("The Left & top offset are:"+$("div").offset().left+',' +$("div").offset().top);
    // $("p").text("Position is : " + $("div").position().left + "   " + $("div").position().top);
    
  });

  // $("p").text($("#div1").hasClass("headin").toString());
  // $("p").append($("#div2").hasClass("headin").toString());
  // $("p").append($("#div3").hasClass("headin").toString()); 

  $("#div1").dblclick(function() {
    $(this).toggleClass("mod");
  });

  $("#div2").dblclick(function() {
    $(this).addClass("mod");
  });

  $("#div2").click(function() {
    $(this).removeClass("mod");
  });
});  