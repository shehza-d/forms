import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";

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

// console.log(values.name.errors);
// console.log(values.name.errors);

const show_password = () => {
  const pass1 = document.getElementById("password");
  if (pass1.type === "password") pass1.type = "text";
  else pass1.type = "password";
};

const Signup = () => {
  //   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
  const fmrk = useFormik({
    initialValues: {
      age: "",
      adress: "",
      email: "",
      name: "",
      password: "",
      repeat_password: "",
      userPhoneNumber: "",
      websiteURL: "",
    },

    validationSchema: yup.object({
      age: yup
        .number("Enter age in number")
        .required("Age is required")
        .min(13, "User can't be younger then 13")
        .max(35, "User can't be older then 35")
        .positive("Age can't be negative")
        .integer("Enter age without decimal"),
      adress: yup
        .string("Enter your Adress")
        .required("Adress is required")
        .min(3, "Please enter more then 3 characters ")
        .max(40, "Please enter within 40 characters "),
      email: yup
        .string("Enter your email")
        .email("Enter your email")
        .required("Email is required")
        .min(1)
        .max(25, "Please enter within 25 characters"),
      name: yup
        .string("Enter your name")
        .required("Name is required")
        .min(4, "Please enter more then 4 characters ")
        .max(15, "Please enter within 15 characters "),
      // .integer("Enter age without decimal")
      password: yup
        .string("Enter your Password")
        .required("Password is required")
        .min(6, "Please enter more then 6 characters ")
        .max(65, "Please enter within 65 characters "),
      repeat_password: yup
        .string("Enter your password again")
        .required("Please enter your password again")
        .min(6, "Please enter more then 6 characters ")
        .max(65, "Please enter within 65 characters ")
        .oneOf([yup.ref("password"), null], "Passwords must match"), //line to check if two passwords match
      userPhoneNumber: yup
        .string("Enter your Phone Number")
        .required("Phone Number is required")
        .min(10, "Please enter more then 10 characters ")
        .max(15, "Please enter within 15 characters "),
      websiteURL: yup
        .string()
        .url("Only enter Website URL")
        .max(40, "Website URL can't be more then 40"),
    }),

    onSubmit: (values) => {
      console.log(values);
      //do something like there you can call API or send data to firebase
      //   if (errors) console.log("error is", errors);
    },
  });
  // console.log(Formik)
  if (fmrk.errors) console.log("error is", fmrk.errors);

  return (
    <div className="signupForm">
      <div className="btn">
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/login">LogIn</Link>
        </button>
        <button>
          <Link to="/signup">SignUp</Link>
        </button>
      </div>

      <form onSubmit={fmrk.handleSubmit} className="form form1">
        <div className="title">Welcome to Signup</div>
        <br />
        <div className="subtitle">Let's create your account!</div>
        <div className="subtitle" id="inputError"></div>
        <div className="input-container ic1">
          <input
            className="input"
            type="name"
            autoComplete="off"
            id="userName"
            placeholder=" "
            name="name"
            value={fmrk.values.name}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="userName" className="placeholder">
            Name *
          </label>
          <span className="errorSpan">{fmrk.errors.name}</span>
        </div>
        <br />
        <div className="input-container ic1">
          <input
            className="input"
            type="tel"
            autoComplete="off"
            id="userPhoneNumber"
            placeholder=" "
            name="userPhoneNumber"
            value={fmrk.values.userPhoneNumber}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="userPhoneNumber" className="placeholder">
            Phone Number *
          </label>
          <span className="errorSpan">{fmrk.errors.userPhoneNumber}</span>
        </div>
        <br />
        <div className="input-container ic2">
          <input
            className="input"
            id="email"
            type="email"
            placeholder=" "
            name="email"
            value={fmrk.values.email}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            Email *
          </label>
          <span className="errorSpan">{fmrk.errors.email}</span>
        </div>
        <br />
        <div className="input-container ic2">
          <input
            className="input"
            id="websiteURL"
            type="websiteURL"
            placeholder=" "
            name="websiteURL"
            value={fmrk.values.websiteURL}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="websiteURL" className="placeholder">
            Website URL
          </label>
          <span className="errorSpan">{fmrk.errors.websiteURL}</span>
        </div>
        <br />
        <div className="input-container ic2">
          <input
            className="input"
            id="adress"
            type="text"
            placeholder=" "
            name="adress"
            value={fmrk.values.adress}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="adress" className="placeholder">
            Adress *
          </label>
          <span className="errorSpan">{fmrk.errors.adress}</span>
        </div>
        <br />
        <div className="input-container ic2">
          <input
            className="input"
            id="age"
            type="text"
            placeholder=" "
            name="age"
            value={fmrk.values.age}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="age" className="placeholder">
            Age *
          </label>
          <span className="errorSpan">{fmrk.errors.age}</span>
        </div>
        <br />
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=" "
            name="password"
            value={fmrk.values.password}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="Password" className="placeholder">
            Create Password *
          </label>
          <input
            className="showPasswordBtn"
            type="checkbox"
            onClick={show_password}
          />
          <span className="errorSpan">{fmrk.errors.password}</span>
        </div>
        <br /> <br />
        {/* <input type="checkbox" onClick={show_password} /> */}
        {/* <span className="showPassword">Show Password</span> */}
        <div className="input-container ic2">
          <input
            id="repeat_password"
            className="input"
            type="password"
            placeholder=" "
            name="repeat_password"
            value={fmrk.values.repeat_password}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="repeat_password" className="placeholder">
            Repeat Password
          </label>
          <span className="errorSpan">{fmrk.errors.repeat_password}</span>
        </div>
        <br /> <br />
        {/* <p id="error_msg">{errors}</p> */}
        <div className="mainDiv">
          <button type="submint" className="submitBtn">
            SUBMIT
          </button>
        </div>
        <br />
        <div className="subtitle">by Shehzad</div>
        <br />
      </form>
      <br />
    </div>
  );
};

export default Signup;
