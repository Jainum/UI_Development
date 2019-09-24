// $(document).ready(function(){
//   $("body").css({"background-color": "red"});
//   $("div").children().css({"background-color": "yellow"});
// });

// $(document).ready(function(){
//   $("#hide").click(function(){
//     $("#demo_form").hide();
//   });
// });

// $("#myselect").change(function(){
//   var selectedOption = $(myselect).children("option:selected").val();
//   alert("You have selected the option - " + selectedOption);
// });

// $(document).ready(function(){
//   $(".check-male").click(function(){
//       $("#male").prop("checked", true);
//   });
//   $(".check-female").click(function(){
//       $("#female").prop("checked", true);
//   });
// });

// $(document).ready(function appendText() {
//   var txt = $("<div></div>"); 
//   $("body").append(txt);   // Append div to body
//   txt2 = $("<h1></h1>").text("JQuery Core");  // Create text with jQuery
//   $("div").append(txt2);   // Append h1 to div
// });

// $(document).ready(function(){
//   $("#google").attr({
//     "href" : "http://www.yahoo.com",
//   });
//   $("#google").text("Yahoo");
// });

$('li').each(function(index,elem) {
  $(elem).prepend(' ' + index + ': ');
});