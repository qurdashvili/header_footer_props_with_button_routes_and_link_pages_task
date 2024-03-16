import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/style.css"
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import About from "./pages/About";



class App extends Component  {
    constructor () {
        super()
    }

    render () {

        return(
          <BrowserRouter>
          <Routes>
            <Route index path="/" element = {<Main />} />
            <Route index path="/contact" element = {<Contact />} />
            <Route index path="/about" element = {<About />} />
            
          </Routes>
          </BrowserRouter>
        )
    }

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);