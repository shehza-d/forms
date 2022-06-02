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
	  document.querySelector('#error_msg').innerText = "Password didn't match";
  }

//Password more then 8 character system
//    if(pass1>8){
// 	   console.log("password is more then 8 character fine")
//    }else{
// 	  document.querySelector('#error_msg').innerText = "Password should be more then 8 character";
//    }


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
