import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="homePage" >
		<p>Welcome to Home Page of FORM</p>
		<p>made with React, Formik and yup</p>
		<p>by <a href="https://github.com/shehza-d">Shehzad</a></p>
		
			<div className="mainDiv">
				<button type="text" className="submit secondBTN"><Link to="/login">LogIn</Link></button>
			</div>
			<br /><br />
			<div className="mainDiv">
				<button type="text" className="submit secondBTN"><Link to="/signup">SignUp</Link></button>
			</div>
		</div>
	);
}

export default Home;