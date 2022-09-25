import { Link } from "react-router-dom";
import { useFormik } from 'formik';



const initialValues = {
	name: "",
	email: "",
	userPhoneNumber: "",
	password: "",
	repeat_password: "",
	// name:"",
	// name:"",
	// name:"",
	// password:"",
};


const show_password = () => {
	const pass1 = document.getElementById("password");
	if (pass1.type === "password") pass1.type = "text";
	else pass1.type = "password";
}

const Signup = () => {

	const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: initialValues,
		onSubmit: (values) => {
			console.log(values)
		}
	})
	// console.log(Formik)

	return (
		<div className="none">

			<button><Link to="/">Home</Link></button>
			<button><Link to="/login">LogIn</Link></button>
			<button><Link to="/signup">SignUp</Link></button>
			{/* <Link to="/login">LogIn</Link> */}

			<form onSubmit={handleSubmit} className="form">

				<div className="title">Welcome to Signup</div>
				<div className="subtitle">Let's create your account!</div>
				<div className="subtitle" id="inputError"></div>


				<div className="input-container ic1">
					<input className="input" type="name" autoComplete="off" id="userName" placeholder=" " name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="userName" className="placeholder">Name</label>
				</div>

				<div className="input-container ic1">
					<input className="input" type="tel" autoComplete="off" id="userPhoneNumber" placeholder=" " name="userPhoneNumber" value={values.userPhoneNumber} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="userPhoneNumber" className="placeholder">Phone Number</label>
				</div>

				<div className="input-container ic2">
					<input className="input" id="email" type="email" placeholder=" " name="email" required value={values.email} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="email" className="placeholder">Email</label>
				</div>






















				<div className="input-container ic2">
					<input id="password" className="input" type="password" placeholder=" " name="password" required value={values.password} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut cut-short"></div>
					<label htmlFor="Password" className="placeholder">Password </label>
				</div>

				<input type="checkbox" onClick={show_password} /><span className="showPassword">Show Password</span>

				<div className="input-container ic2">
					<input id="repeat_password" className="input" type="password" placeholder=" " name="repeat_password" required value={values.repeat_password} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut cut-short"></div>
					<label htmlFor="repeat_password" className="placeholder">Repeat Password</label>
				</div>

				<p id="error_msg"></p>

				<div className="mainDiv">
					<button type="submint" className="submit secondBTN">SUBMIT </button>
				</div>

				<div className="subtitle">by Shehzad</div><br />

			</form>
		</div>
	);
}

export default Signup;