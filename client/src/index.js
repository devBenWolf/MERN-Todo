import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize'
import LoginContextProvider from './context/loginContext';
import ThemeContextProvider from "./context/themeContext"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeContextProvider>
  <LoginContextProvider>
    <App />
  </LoginContextProvider>
  </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

