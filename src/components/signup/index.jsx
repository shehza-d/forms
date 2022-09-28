import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import './index.css';


// const initialValues = {
// 	name: "",
// 	email: "",
// 	userPhoneNumber: "",
// 	adress:"",
// 	websiteURL:"",
// 	// name:"",
// 	password:"",
// 	repeat_password: "",
// };

const show_password = () => {
	const pass1 = document.getElementById("password");
	if (pass1.type === "password") pass1.type = "text";
	else pass1.type = "password";
}

const Signup = () => {

	const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: {
			age:"",
			adress: "",
			email: "",
			name: "",
			password: "",
			repeat_password: "",
			userPhoneNumber: "",
			websiteURL: "",
		},
		validationSchema:
			yup.object({
				age: yup.number().required().positive().integer(),
				// adress: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
				email: yup.string().email(),
				name: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
				// password: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
				// repeat_password: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
				// userPhoneNumber: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
				// websiteURL: yup.string().url(),

			}),
		onSubmit: (values) => {
			console.log(values)
		}

	})
	console.log(errors)
	// console.log(Formik)

	return (
		<div className="signupForm">
			<div className="btn">

			<button><Link to="/">Home</Link></button>
			<button><Link to="/login">LogIn</Link></button>
			<button><Link to="/signup">SignUp</Link></button>
			</div>
			{/* <Link to="/login">LogIn</Link> */}

			<form onSubmit={handleSubmit} className="form form1">

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
					<input className="input" id="email" type="email" placeholder=" " name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="email" className="placeholder">Email</label>
				</div>

				<div className="input-container ic2">
					<input className="input" id="websiteURL" type="websiteURL" placeholder=" " name="websiteURL" value={values.websiteURL} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="websiteURL" className="placeholder">Website URL</label>
				</div>
				<div className="input-container ic2">
					<input className="input" id="adress" type="text" placeholder=" " name="adress" value={values.adress} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="adress" className="placeholder">Adress</label>
				</div>

				<div className="input-container ic2">
					<input className="input" id="age" type="text" placeholder=" " name="age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut"></div>
					<label htmlFor="age" className="placeholder">Age</label>
				</div>


















				<div className="input-container ic2">
					<input id="password" className="input" type="password" placeholder=" " name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut cut-short"></div>
					<label htmlFor="Password" className="placeholder">Password </label>
				</div>

				<input type="checkbox" onClick={show_password} /><span className="showPassword">Show Password</span>

				<div className="input-container ic2">
					<input id="repeat_password" className="input" type="password" placeholder=" " name="repeat_password" value={values.repeat_password} onChange={handleChange} onBlur={handleBlur} />
					<div className="cut cut-short"></div>
					<label htmlFor="repeat_password" className="placeholder">Repeat Password</label>
				</div>

				{/* <p id="error_msg">{errors}</p> */}

				<div className="mainDiv">
					<button type="submint" className="submitBtn">SUBMIT</button>
				</div>

				<div className="subtitle">by Shehzad</div><br />

			</form>
		</div>
	);
}

export default Signup;