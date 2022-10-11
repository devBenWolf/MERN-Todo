import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Header/Header.js"
import TodoPage from "./pages/TodoPage.js"
import Login from "./pages/Login.js"
import Landing from "./pages/Landing.js"
import {GlobalStyles} from "./globalStyles.js"
import ProtectedRoute from "./pages/ProtectedRoute.js"

function App() {



  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<ProtectedRoute><TodoPage /></ProtectedRoute>} />

        <Route path = "/login" element ={<Login />} />
        <Route path = "/landing" element = {<Landing />} />
      </Routes>
    </BrowserRouter>
    </>
  );

}


export default App;
