let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function btn() {
  alert("Order done successfully");
}

function formValidation() {
  var nameReg = /[a-zA-Z-.]/
  var mobileReg = /((\+88)|(\+88-))?01[3-9][0-9]{8}/
  var emailReg = /(cse|eee|cee|arch)_\d{10}@lus\.ac.bd/
  // var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var passReg = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#,*,.,$,@])).{8,20}/


  var fname = document.getElementById('fName').value;
  var lname = document.getElementById('lName').value;
  var email = document.getElementById('Femail').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('pass').value;
  var cPass = document.getElementById('confirmPass').value;


  //first name validation
  if (fname.length < 2 || fname.length > 20) {
    document.getElementById("fnameError").innerHTML = "length must be 2-20";
  }
  else if (!fname.match(nameReg)) {
    document.getElementById("fnameError").innerHTML = "only char is allowed";
  }
  else {
    document.getElementById("fnameError").innerHTML = "";
  }

  // last name validation
  if (lname.length < 2 || lname.length > 20) {
    document.getElementById("l_nameError").innerHTML = "length must be 2-20";
  }
  else if (!lname.match(nameReg)) {
    document.getElementById("l_nameError").innerHTML = "only char is allowed";
  }
  else {
    document.getElementById("l_nameError").innerHTML = "";
  }



  //email validation
  if (!email.match(emailReg)) {
    document.getElementById("eError").innerHTML = "invalid email";
  }
  else {
    document.getElementById("eError").innerHTML = "";
  }


  // mobile validation
  if (!mobile.match(mobileReg)) {
    document.getElementById("mError").innerHTML = "mobile number is invalid";
  }
  else {
    document.getElementById("mError").innerHTML = "";
  }



  // password validation
  if (!password.match(passReg)) {
    document.getElementById("pError").innerHTML = "password must contain 1 special char, 1 capital latter, 1 small latter, 1 digit & length 8-20";
  }
  else {
    document.getElementById("pError").innerHTML = "";
  }



  //confirm password check
  if (cPass !== password){
    document.getElementById("cpError").innerHTML = "pass not match";
  }
}



