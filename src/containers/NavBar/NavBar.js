import React, { Component,} from "react";
import "./NavBar.css";
import NavBarImg from "../../assets/navBarImg.png";

class NavBar extends Component {
    render () {
        return (
            <img className="nav-bar-img" src={NavBarImg}/>
        )
    }
}

export default NavBar;
