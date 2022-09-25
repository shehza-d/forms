// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';


const initialValues={
	email:"",
	password:"",
};

const show_password = () => {
	const pass1 = document.getElementById("password");
	if (pass1.type === "password") pass1.type = "text";
	else pass1.type = "password";
}

const Login = () => {


	const {values, errors, handleBlur, handleChange ,handleSubmit} = useFormik({
		initialValues: initialValues,
		onSubmit:(values)=>{
			console.log(values)
		}
	})
	// console.log(Formik)



	return (
		<div className="none">


			<button><Link to="/">Home</Link></button>
			<button><Link to="/login">LogIn</Link></button>
			<button><Link to="/signup">SignUp</Link></button>


			<form  className="form" onSubmit={handleSubmit}>

				<div className="title">Welcome Back Login</div>
				<div className="subtitle">shehheh!</div>
				<div className="subtitle" id="inputError"></div>


				<div className="input-container ic2">
					<input className="input" id="email" type="email" placeholder=" " name="email" required autoComplete="off" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
					<div className="cut"></div>
					<label htmlFor="email" className="placeholder">Email</label>
				</div>
				<div className="input-container ic2">
					<input id="password" className="input" type="password" placeholder=" " name="password" required autoComplete="off" value={values.password}  onChange={handleChange} onBlur={handleBlur}/>
					<div className="cut cut-short"></div>
					<label htmlFor="password" className="placeholder">Password </label>
				</div>
				<br />
				<input type="checkbox" onClick={show_password} /><span className="showPassword">Show Password</span>
				<br /><br />


				<p id="error_msg"></p>

				<div className="mainDiv">
					<button type="submit" className="submit secondBTN">SUBMIT </button>
				</div>
				<br />

				<div className="subtitle">by Shehzad</div><br />
			</form>
		</div>
	);
}

export default Login;