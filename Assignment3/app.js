window.onload = DisplayCurrentTime();

function DisplayCurrentTime() {
  var date = new Date();
  var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var am_pm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var dayOfTheMonth = date.getDate();
  var month = (date.getMonth() + 1);
  var year = date.getFullYear();
  time = hours + ":" + minutes + " " + am_pm + "  " + month + "/" + dayOfTheMonth + "/" + year;
  timestamp.innerHTML = time;
};


//Function to Validate User Input  
function ValidateUserInput(e) {
  
  // Validate user input
  var name = document.getElementById('pname');
  var zipcode = document.getElementById('pzipcode');
  var country = document.getElementById('pcountry');
  var gender = document.getElementById('pgender');
  var preferences = document.getElementById('ppreferences');
  var phone = document.getElementById('pphone');
  var email = document.getElementById('pemail');
  var password = document.getElementById('ppassword');
  var verifypassword = document.getElementById('pverifypassword');
  
  var isValidName = ValidateName(name);
  var isValidZipcode = ValidateZipcode(zipcode);  
  var isValidCountry = ValidateCountry(country);
  var isValidGender = ValidateGender();
  var isValidPreferences = ValidatePreferences();
  var isValidPhone = ValidatePhone(phone);
  var isValidEmail = ValidateEmail(email);
  var isValidPassword = ValidatePassword(password);
  var isValidVerifyPassword = ValidateVerifyPassword(verifypassword);
  
  console.log("Hi User");
  if(isValidName && isValidZipcode && isValidCountry && isValidGender && isValidPreferences && 
     isValidPhone && isValidEmail && isValidPassword && isValidVerifyPassword)
  {
    console.log("Hello User");
    //transferToOfficialForm();
  }
  
  return false;
}


// Function to Validate Name
function ValidateName(name) {
  if (name=="")
  {
    document.getElementById('nametext').innerHTML = "Name is mandatory!";
    document.getElementById('nametext').style.color = 'red';
    return false;
  }
  else {
    return true;
  }
}

//Function to Validate Zipcode
function ValidateZipcode(zipcode) { 
  let i;
  
  if(zipcode != "" && zipcode.length == 6) {
    for(i=0; i<zipcode.length;i++) {
      if(zipcode[i] >= 0 && zipcode[i] <= 9) {
        return true;    
      }
      else {
        document.getElementById('zipcodetext').innerHTML = "Please enter a valid zipcode!";
        document.getElementById('zipcodetext').style.color = 'red';
        return false;
      }
    }
  }
  else {
    document.getElementById('zipcodetext').innerHTML = "Zipcode is mandatory!";
    document.getElementById('zipcodetext').style.color = 'red';
    return false;
  }
}

//Function to validate country
function ValidateCountry(country) {
  if (country=="")
  {
    document.getElementById('countrytext').innerHTML = "Country name is mandatory!";
    document.getElementById('countrytext').style.color = 'red';
    return false;
  }
  else {
    return true;
  }
}

//Function to validate gender
function ValidateGender() {
  let i;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return true;
    }
    else {
      document.getElementById('gendertext').innerHTML = "Gender is mandatory!";
      document.getElementById('gendertext').style.color = 'red';
      return false;
    }
  }
}

//Function to validate preferences
function ValidatePreferences() {
  let i;
  for (i = 0; i < preferences.length; j++) {
    if (preferences[i].checked) {
      return true;
    }
    else {
      document.getElementById('preferencestext').innerHTML = "Preferences is mandatory!";
      document.getElementById('preferencestext').style.color = 'red';
      return false;
    }
  }  
}

function ValidatePhone(phone) {
  let i;
  
  if(phone != "" && phone.length == 6) {
    for(i=0; i<phone.length;i++) {
      if(phone[i] >= 0 && phone[i] <= 9) {
        return true;    
      }
      else {
        alert("")
        document.getElementById('phonetext').innerHTML = "Entered an invalid Phone Number!";
        document.getElementById('phonetext').style.color = 'red'
        return false;
      }
    }
  }
  else {
    document.getElementById('phonetext').innerHTML = "Entered an invalid Phone Number!";
    document.getElementById('phonetext').style.color = 'red'
    return false;
  }
}

// Function to Validate Email Address
function ValidateEmail(email) {
  if (email=="")
  {
    document.getElementById('emailtext').innerHTML = "Entered an invalid Email!";
    document.getElementById('emailtext').style.color = 'red'
    return false;
  }
  else {
    return true;
  }
}

// Function to Validate Password
function ValidatePassword(password) {
  if(password.length>6 || password.length<8){  
    return true;
  }
  else{
    document.getElementById('pwdtext').innerHTML = "Password range invalid, retry!";
    document.getElementById('pwdtext').style.color = 'red'
    return false;
  }   
}

// Function to Validate Verify Password
function ValidateVerifyPassword(verifypassword) {
  if(verifypassword != "") {
    if(password == verifypassword){
      return true;
    }
    else{
      document.getElementById('conpwdtext').innerHTML = "Confirm your password!";
      document.getElementById('conpwdtext').style.color = 'red'
      return false;
    }
  }
  else {
    document.getElementById('conpwdtext').innerHTML = "Password mismatch, retry!";
      document.getElementById('conpwdtext').style.color = 'red'
      return false;
  }
}