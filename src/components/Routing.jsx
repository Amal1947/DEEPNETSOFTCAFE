import React from 'react'
import App from "../App"
import Creater from "../Admin/Creater"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Routing() {
  return (
    <div>
        <Router>
     

      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/adminCreaterPage" element={<Creater/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default Routing