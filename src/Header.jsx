import React, {Fragment} from "react";
import { Link } from "react-router-dom";


function Header() {

    const linksStyle = {

        textDecoration : "none",
        marginLeft : "50px"
    }

    return(
        <Fragment>
            <nav className="pt-1" id="navbar">
                <Link to = {"/"} style={linksStyle}>Home&nbsp;</Link>
                <Link to = {"/contact"} style={linksStyle}>Contact&nbsp;</Link>
                <Link to = {"/about"} style={linksStyle}>About&nbsp;</Link>
            </nav>
        </Fragment>
    )
}

export default Header;