import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import AboutPage from './AboutPage/AboutPage';

ReactDOM.render(
  <React.StrictMode>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      
      <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
