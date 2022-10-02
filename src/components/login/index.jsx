// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";

// const initialValues = {
//   email: "",
//   password: "",
// };

const show_password = () => {
  const pass1 = document.getElementById("password");
  if (pass1.type === "password") pass1.type = "text";
  else pass1.type = "password";
};

const Login = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: yup.object({ 
    //   email: yup
    //     .string()
    //     .email("Enter valid email")
    //     // .string("Enter your email")
    //     // .required("Email is required")
    //     .min(3, "Please enter more then 3 characters ")
    //     .max(32, "Please enter within 32 characters "),
    //   password: yup
    //     // .string("Enter yo ur email")
    //     // .required("Email is required")
    //     .min(6, "Please enter more then 6 characters ")
    //     .max(64, "Please enter within 64 characters ")
    //   // repeat_password: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
    //   // userPhoneNumber: yup.string('Enter your email').required('Email is required').min(2, "please enter more then 2 characters ").max(32, "please enter within 32 characters "),
    // }),
    onSubmit: (inputValues) => {
      console.log(inputValues);
  console.log(errors);

    },
  });
  // console.log(Formik)

  return (
    <div className="loginForm">
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

      <form className="form " onSubmit={handleSubmit}>
    
	    <div className="title">Welcome Back to Login</div>
        <br />
        <div className="subtitle">Thank you for staying connected!</div>
        <div className="subtitle" id="inputError"></div>

        <div className="input-container ic2">
          <input
            className="input"
            id="email"
            type="email"
            placeholder=" "
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=" "
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="password" className="placeholder">
            Password{" "}
          </label>
        </div>
        <br />
        <input type="checkbox" onClick={show_password} />
        <span className="showPassword">Show Password</span>
        <br />
        <br />

        <p id="error_msg"></p>

        <div className="mainDiv">
          <button type="submint" className="submitBtn">
            SUBMIT
          </button>
        </div>
        <br />

        <div className="subtitle">by Shehzad</div>
        <br />
      </form>
    </div>
  );
};

export default Login;
