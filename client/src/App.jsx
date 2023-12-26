import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
// import SignUp from "./components/pages/SignUp/SignUp";
// import Login from "./components/pages/Login/Login";
// import Home from "./components/pages/Home/Home";
import {
  SignUp,
  Login,
  Home
} from "./components/pages";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <Fragment>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Fragment>  
  );
}

export default App;


// export default () => {
//   let app = ( 
//   <Fragment>
//     <Routes>
//       <Route path="/sign-up" exact element={<SignUp />} />
//     </Routes>
//   </Fragment>
//   );

//   return <Fragment>{app}</Fragment>;
// }
