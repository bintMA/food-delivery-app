// For Contact button
// function myFunction() {
//     document.getElementById("c-form").submit();
// }
// myFunction();

// Form Validation 

function validateForm() {
    var a = document.getElementById("inputName").value;
    if (a == "" || a == null) {
      alert("Kindly fill out your name");
      return false;
    }
    var b = document.getElementById("inputEmail").value;
    if (b == "" || b == null) {
      alert("Kindly fill out your Email");
      return false;
    }
    var c = document.getElementById("inputMessage").value;
    if (c == "" || c == null) {
      alert("Kindly leave a message");
      return false;
    }
  }
  