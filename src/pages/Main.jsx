import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Notification from "../Notification";

function Main() {


    const bodystyle = {
        width: "100%",
        backgroundColor: "goldenrod",

    }

    const str = {
        name : "აბა მოგწონს?"
    }

    return (

        <Fragment>
            <Header></Header>

            <div id="mainbody" style={bodystyle}>
                <div id="ubraloddivi" className="d-flex flex-column align-items-center">
                    <h1>მოგესალმებით მთავარი გვერდიდან</h1>
                    <button onClick={() => Notification(str)  } className="btn btn-primary p-3 w-50 mt-4"> Button </button>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}

export default Main;