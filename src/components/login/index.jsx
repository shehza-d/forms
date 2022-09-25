// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
	return (
		<div className="none">


			<button><Link to="/">Home</Link></button>
			<button><Link to="/login">LogIn</Link></button>
			<button><Link to="/signup">SignUp</Link></button>


			<form onsubmit="form_valadtion(); return false" className="form">

				<div className="title">Welcome Back Login</div>
				<div className="subtitle">shehheh!</div>
				<div className="subtitle" id="inputError"></div>


				<div className="input-container ic2">
					<input className="input" type="email" placeholder=" " name="email" required />
					<div className="cut"></div>
					<label for="Email" className="placeholder">Email</label>
				</div>
				<div className="input-container ic2">
					<input id="password" className="input" type="password" placeholder=" " name="password" required />
					<div className="cut cut-short"></div>
					<label for="Password" className="placeholder">Password </label>
				</div>
				<br />
				<input type="checkbox" onclick="show_password()" /><span className="showPassword">Show Password</span>
				<br /><br />


				<p id="error_msg"></p>

				<div className="mainDiv">
					<button type="text" className="submit secondBTN">SUBMIT </button>
				</div>
				<br />

				<div className="subtitle">by Shehzad</div><br />
			</form>
		</div>
	);
}

export default Login;