import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {

    const bodystyle = {
        backgroundColor: "goldenrod",

    }

    return (

        <Fragment>
            <Header></Header>

            <div id="mainbody1" style={bodystyle} className="container-fluid">
                <h1 >მოგესალმებით კონტაქტის გვერდიდან</h1>
            </div>

            <Footer></Footer>
        </Fragment>
    )
}

export default Contact;