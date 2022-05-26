//Show Password funciton
function show_password() {
  const pass1 = document.getElementById("password");
  if (pass1.type === "password") {
    pass1.type = "text";
  } else {
    pass1.type = "password";
  }
}

function form_valadtion() {
  //matching password system
  const pass1 = document.getElementById("password").value;
  const pass2 = document.getElementById("repeat_password").value;
  if(pass1===pass2){
  	console.log("match")
  }else{
  	console.log("Password didn't match!")
  }


// console.log("ps1=  "+pass1);
// console.log("ps2=  "+pass2);



//   function CheckPassword(inputtxt) {
//     var passw = /^[A-Za-z]\w{7,14}$/;
//     if (inputtxt.value.match(passw)) {
//       alert("Correct, try another...");
//       return true;
//     } else {
//       alert("Wrong...!");
//       return false;
//     }}

}
