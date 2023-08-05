import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop  from "./main/product_page";
import "./index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
          <Footer />
        </Router>

    </div>
 

  );
}

export default App;