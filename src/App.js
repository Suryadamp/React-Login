// import "./styles.css";
// import { Login } from "./container/login";
// import { Dashboard } from "./container/dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import { useSelector } from "react-redux";
import Sever from "./components/Sever"

export default function App() {
  console.log("surya")
  // const auth = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <Routes>
    
        <Route exact path="/" element={ <Sever/>}/>
      </Routes>
    </Router>
  );
}
