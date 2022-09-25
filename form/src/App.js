import './App.css';
import Home from './components/home'
import Login from './components/login'
import Signup from './components/signup/index'
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter ,Routes,Route,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>


    </div>
  );
}

export default App;
