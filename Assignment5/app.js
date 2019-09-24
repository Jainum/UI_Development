$(document).ready(function(){
  // $("p").on({
  //   mouseenter: function(){
  //     $(this).css("background-color", "lightgray");
  //   },
  //   mouseleave: function(){
  //     $(this).css("background-color", "white");
  //   },    
  //   dblclick: function(){
  //     $(this).css("background-color", "yellow");
  //   }, 
  //   click: function(){
  //     $(this).css("background-color", "red");
  //   }  
  // });
  $("#test").on({
    focus: function(){
      $(this).css("background-color", "lightgray");
    },
    blur: function(){
      $(this).css("background-color", "white");
    },
    change: function(){
      var idea = $('test');
      var html = idea.innerHTML;
      $("<p>Text is changed.</p>").appendTo("body");  
    }
  });

  $("h1").click(function(){
    $(this).hide();
  });

  $("h1").click(function(){
    $("<h1>Jainum</h1>").appendTo("body");
  });

  // var pdbl = $("p");
  // pdbl.dblclick(function() {
  //   pdbl.toggleClass("dbl");
  // });

  var listItems = $('li');
  var rawListItem = listItems[1]; // or listItems.get(0)
  var html = rawListItem.innerHTML;
  //alert(html);
  
  $("button").click(function(){
    $("div").css("background-color", "black");
  });

  $("#userid").focus(function() {
    $("#userid").blur();
  });

});