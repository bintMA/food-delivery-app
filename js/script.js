// For Contact button
// function myFunction() {
//     document.getElementById("c-form").submit();
// }
// myFunction();

// Form Validation 

function validateForm() {
    var a = document.forms["c-form"]["fname"].value;
    if (a == "") {
      alert("Kindly fill out your name");
      return false;
    }
    var b = document.forms["c-form"]["email"].value;
    if (b == "") {
      alert("Kindly fill out your Email");
      return false;
    }
    var c = document.forms["c-form"]["message"].value;
    if (c == "") {
      alert("Kindly leave a message");
      return false;
    }
}