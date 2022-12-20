import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

import axios from "axios";

let baseURI = "";
if (window.location.href.split(":")[0] === "http") {
  baseURI = `http://localhost:3001`;
} else {
  baseURI = `https://busy-ruby-armadillo-wrap.cyclic.app`;
}
// const baseURI = `http://localhost:3001`;
// const baseURI = `https://busy-ruby-armadillo-wrap.cyclic.app`;

export default function Signup() {
  //function to show password
  const [showPswIcon, setShowPswIcon] = useState("eyeOpen");
  const pass1 = document.querySelector("#userPassword");
  const show_password = () => {
    // console.log(pass1.type);
    if (pass1.type === "password") {
      pass1.type = "text";
      setShowPswIcon("eyeClose");
    } else {
      pass1.type = "password";
      setShowPswIcon("eyeOpen");
    }
  };

  //   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
  const fmrk = useFormik({
    initialValues: {
      age: "",
      address: "",
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
      address: yup
        .string("Enter your address")
        .required("address is required")
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

      createdOn: yup.date().default(() => new Date()),
    }),

    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axios.post(`${baseURI}/user`, {
          age: values.age,
          address: values.address,
          email: values.email,
          name: values.name,
          password: values.password,
          userPhoneNumber: values.userPhoneNumber,
          websiteURL: values.websiteURL,
        });
        console.log(res.data.message);
        // console.log(res.data.message);
      } catch (err) {
        console.log(err);
        console.log(err.response.data.message);
      }
      //do something like there you can call API or send data to firebase
      //   if (errors) console.log("error is", errors);
    },
    //if (errors) console.log("error is", errors);
  });
  // console.log(Formik)
  // if (fmrk.errors) console.log("error is", fmrk.errors);

  return (
    <div className="signupForm">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="routerNavBtns">
        <Link to="/">Home</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/signup">SignUp</Link>
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
          {/* <span className="errorSpan">{fmrk.errors.name}</span> */}
          {fmrk.touched.name && Boolean(fmrk.errors.name) ? (
            <span className="errorSpan">{fmrk.errors.name}</span>
          ) : null}
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
          {fmrk.touched.userPhoneNumber &&
          Boolean(fmrk.errors.userPhoneNumber) ? (
            <span className="errorSpan">{fmrk.errors.userPhoneNumber}</span>
          ) : null}
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
          {fmrk.touched.email && Boolean(fmrk.errors.email) ? (
            <span className="errorSpan">{fmrk.errors.email}</span>
          ) : null}
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
          {fmrk.touched.websiteURL && Boolean(fmrk.errors.websiteURL) ? (
            <span className="errorSpan">{fmrk.errors.websiteURL}</span>
          ) : null}
        </div>
        <br />
        <div className="input-container ic2">
          <input
            className="input"
            id="address"
            type="text"
            placeholder=" "
            name="address"
            value={fmrk.values.address}
            onChange={fmrk.handleChange}
            onBlur={fmrk.handleBlur}
          />
          <div className="cut"></div>
          <label htmlFor="address" className="placeholder">
            Address *
          </label>
          {fmrk.touched.address && Boolean(fmrk.errors.address) ? (
            <span className="errorSpan">{fmrk.errors.address}</span>
          ) : null}
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
          {fmrk.touched.age && Boolean(fmrk.errors.age) ? (
            <span className="errorSpan">{fmrk.errors.age}</span>
          ) : null}
        </div>
        <br />
        <div className="input-container ic2">
          <input
            id="userPassword"
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
          <button type="button" className="showPswBtn" onClick={show_password}>
            {showPswIcon === "eyeOpen" ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          {fmrk.touched.password && Boolean(fmrk.errors.password) ? (
            <span className="errorSpan">{fmrk.errors.password}</span>
          ) : null}
        </div>
        <br />
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
          {fmrk.touched.repeat_password &&
          Boolean(fmrk.errors.repeat_password) ? (
            <span className="errorSpan">{fmrk.errors.repeat_password}</span>
          ) : null}
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
}
