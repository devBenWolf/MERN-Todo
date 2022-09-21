import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './context/themeContext';
import 'modern-normalize'
import { GlobalStyles } from './globalStyles';
import LoginContextProvider from './context/loginContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login';
import Layout from './Layout/Layout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
      <ThemeContextProvider>
      <LoginContextProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </LoginContextProvider>
      </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

