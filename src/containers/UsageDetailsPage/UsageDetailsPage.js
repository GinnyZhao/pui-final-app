import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../appRoutes";

import usage_top from "../../assets/usage_top.png";
import usage_title from "../../assets/usage_title.png";
import recommend from "../../assets/recommend.png";
import image from "../../assets/image.png";
import email from "../../assets/email.png";
import speech from "../../assets/speech.png";


import "./UsageDetailsPage.css"

class UsageDetailsPage extends Component {
    render () {
        return (
            <div className="details">
                <img className="progress_bar" src={usage_top}/>
                <img className="title" src={usage_title}/>
                <div className="content">
                    <p className="regular"> Machine Learning is widely used in a lot of systems. Some of the most common ones include:
                    </p>
                    <br/><br/><br/>
                    <div className="row detailPage">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="usage_details" src={recommend} style={{"margin-bottom": "15px"}}/>
                            <p className="image_desc"> Recommender Systems</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="usage_details" src={image}/>
                            <p className="image_desc"> Image Recognition</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="usage_details" src={email}/>
                            <p className="image_desc">Email Spam Filtering</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="usage_details" src={speech} style={{"margin-top": "25px"}}/>
                            <p className="image_desc"> Speech Recognition</p>
                        </div>
                    </div>
                </div>
                <NavLink to={appRoutes.usage}>
                    <button className="back_button"> Back </button>
                </NavLink>


            </div>
        )
    }
}

export default UsageDetailsPage;