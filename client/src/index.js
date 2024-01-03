import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Navigate } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(

ReactDOM.render(
  <Router>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );


















// import {createRoot} from 'react-dom/client';
// import App from './App';
// import {BrowserRouter as Router} from 'react-router-dom';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // 👇️ wrap App in Router

// root.render(
//   <Router>
//     <App />
//   </Router>
// );









// import "react-app-polyfill/ie11";
// import "react-app-polyfill/stable";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const rootElement = document.getElementById('root');

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();





