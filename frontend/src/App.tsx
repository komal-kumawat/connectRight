import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element = {<Register/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
