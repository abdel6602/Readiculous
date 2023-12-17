import React, { useEffect, Fragment } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import './App.css';
import SignUp from "./components/pages/SignUp/SignUp";

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

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
};

export default App;
