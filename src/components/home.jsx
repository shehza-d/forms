import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="homePage" >
			<p>Welcome to Home Page of FORM</p>
			<p>made with React, Formik and yup</p>
			<p>by <a href="https://github.com/shehza-d">Shehzad</a></p>

			<div className="mainDiv">
				<Link to="/login" className="submitBtn">LogIn</Link>
			</div>
			<br /><br />
			<div className="mainDiv">
				<Link to="/signup" className="submitBtn">SignUp</Link>
			</div>
		</div>
	);
}

export default Home;