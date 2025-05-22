import { Link } from "react-router-dom";
// import VanillaTilt from 'vanilla-tilt';
// import Tilt from 'react-tilt'   Tilt" data-tilt VanillaTilt
import {
  BsGithub,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsStackOverflow,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaHackerrank } from "react-icons/fa";

const Home = () => {
  return (
    <div className="homePage">
      <div className="card">
        <p>Welcome to Home Page of FORM</p>
        <p>made with React, Formik and yup</p>
        <p>
          by <a href="https://github.com/shehza-d/forms">Shehzad</a>
        </p>

        <div className="mainDiv">
          <Link to="/login" className="submitBtn">
            LogIn
          </Link>
        </div>
        <br />
        <br />
        <div className="mainDiv">
          <Link to="/signup" className="submitBtn">
            SignUp
          </Link>
        </div>

        <ul className="iconscontainer">
          <li>
            <a
              href="https://twitter.com/Shehza_d_"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shehza-d"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shehzadd/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/shehza.d?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCUTMs216kmgY9lOgBFDckAQ"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube />
            </a>
          </li>
          <li>
            <a
              href="mailto:shehzaddiqbal@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/shehza_d"
              target="_blank"
              rel="noreferrer"
            >
              <FaHackerrank />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/18210334/shehzad"
              target="_blank"
              rel="noreferrer"
            >
              <BsStackOverflow />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
