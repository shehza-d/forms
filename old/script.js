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
     if(pass1>8){
  	   console.log("password is more then 8 character fine")
     }else{
  	  document.querySelector('#error_msg').innerText = "Password should be more then 8 character";
     }
  
  
  console.log("ps1=  "+pass1);
  console.log("ps2=  "+pass2);
  
  
  
    function CheckPassword(inputtxt) {
      var passw = /^[A-Za-z]\w{7,14}$/;
      if (inputtxt.value.match(passw)) {
        alert("Correct, try another...");
        return true;
      } else {
        alert("Wrong...!");
        return false;
      }}
  
  }
  
  
  new code to merge
  //Show Password funciton
  let show_password = () => {
    const pass1 = document.getElementById("password");
    if (pass1.type === "password") {
      pass1.type = "text";
    } else {
      pass1.type = "password";
    }
  }
  
  let form_valadtion = () => {
    //checking if user have has put input > 60 char
    let name = document.querySelector('#userName').value;
    const email = document.querySelector('#email').value;
    let city = document.querySelector('#city').value;
    const pass1 = document.querySelector('#password').value;
    let pass2 = document.querySelector('#repeat_password').value;
    console.log(city.length)
  
    // if(name.length>30){
    if (name.length > 60 || email.length > 60 || city.lenght > 60 || pass1.lenght > 60 || pass2.lenght > 60) {
      console.log("Exceding limit of 60 Character")
      return;
    } else {
      console.log("In limits of 60 Character")
  
    }
  
  
  
  
    // if (name||email||city||pass1||pass2)
  
  
  
  
  
  
  
  
    //matching password system
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("repeat_password").value;
  
    if (pass1 === pass2) {
      document.querySelector('#error_msg').innerText = "Password  Match";
      document.querySelector('#error_msg').style.color = 'green';
      // console.log("match")
    } else {
      document.querySelector('#error_msg').innerText = "Password didn't match";
      document.querySelector('#error_msg').style.color = 'red';
      // console.log("Password didn't match!")
      return;
    }
  
    // RegExp ya Regex lagne hyn idher
  
  
    //Password more then 8 character system
  
       if(pass1>8){
    	   console.log("password is more then 8 character fine")
       }else{
    	  document.querySelector('#error_msg').innerText = "Password should be more then 8 character";
       }
  
  
    console.log("ps1=  "+pass1);
    console.log("ps2=  "+pass2);
  
  
  
      function CheckPassword(inputtxt) {
        var passw = /^[A-Za-z]\w{7,14}$/;
        if (inputtxt.value.match(passw)) {
          alert("Correct, try another...");
          return true;
        } else {
          alert("Wrong...!");
          return false;
        }}
    return;
  }