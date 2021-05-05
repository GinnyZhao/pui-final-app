import React, { Component,} from "react";
import "./Footer.css";
import FooterImg from "../../assets/footerImg.png";

class Footer extends Component {
    render () {
        return (
            <img className="footer-img" src={FooterImg}/>
        )
    }
}

export default Footer;