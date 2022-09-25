import { Link } from "react-router-dom";


const Signup = () => {
	return (
		<div className="none">

			<button><Link to="/">Home</Link></button>
			<button><Link to="/login">LogIn</Link></button>
			<button><Link to="/signup">SignUp</Link></button>
			{/* <Link to="/login">LogIn</Link> */}

			<form onsubmit="form_valadtion(); return false" className="form">

				<div className="title">Welcome to Signup</div>
				<div className="subtitle">Let's create your account!</div>
				<div className="subtitle" id="inputError"></div>


				<div className="input-container ic1">
					<input className="input" type="text" placeholder=" " name="name" />
					<div className="cut"></div>
					<label for="userName" className="placeholder">Name</label>
				</div>
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

				<input type="checkbox" onclick="show_password()" /><span className="showPassword">Show Password</span>

				<div className="input-container ic2">
					<input id="repeat_password" className="input" type="password" placeholder=" " name="password" required />
					<div className="cut cut-short"></div>
					<label for="Password" className="placeholder">Repeat Password</label>
				</div>

				<p id="error_msg"></p>

				<div className="mainDiv">
					<button type="text" className="submit secondBTN">SUBMIT </button>
				</div>

				<div className="subtitle">by Shehzad</div><br />

			</form>
		</div>
	);
}

export default Signup;