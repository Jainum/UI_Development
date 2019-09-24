$(document).ready(function () {

  $("input").attr('disabled', 'true');

  $("#control").click(function () {
    $('input').prop('disabled', function(i, v) { return !v; });
    let check = $("input").attr('disabled');
    // console.log(chek);
    if (check === 'disabled') {
      $(this).html("Enable Form");
    }
    else
    {
      $(this).html("Disable Form");
    }
  });

  $("#new").click(function () {
    var addButton = $('#new'); //Add button selector
    var wrapper = $('#form'); //Input field wrapper
    var fieldHTML = '<input type="text" class="mail" value="" style="display:block"/><br>'; //New input field html
    $(wrapper).append(fieldHTML); //Add field html
  });

  $("#show").click(function () {
    let name = $("#name").val();
    let age = $("#age").val(); 
    let email = $(".mail:first").val(); 
    
    alert("Name is: " + name + "\nAge is: " + age + "\nEmail is: " + email);
  });

}); 