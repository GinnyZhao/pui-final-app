import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../appRoutes";

import overview_top from "../../assets/overview_top.png";
import overview_title from "../../assets/overview_title.png";
import overview_details from "../../assets/overview_details.png";
import "./OverviewDetailsPage.css"

class OverviewDetailsPage extends Component {
    render () {
        return (
            <div className="details">
                <img className="progress_bar" src={overview_top}/>
                <img className="title" src={overview_title}/>
                <div className="content">
                    <p className="regular"> Machine learning is when you load </p>
                    <p className="highlight"> lots of data </p>
                    <p className="regular"> into a computer program and choose a model to “fit” the data, which allows the computer (without your help) to come up with </p>
                    <p className="highlight"> predictions. </p>
                    <p className="regular"> The way the computer makes the model is through algorithms, which can range from a simple equation (like the equation of a line) to a very complex system of logic/math that gets the computer to the best predictions.</p>
                    <br/> <br/>
                    <p className="regular"> Machine learning is aptly named, because once you choose the model to use and tune it (a.k.a. improve it through adjustments), the machine will use the model to learn the </p>
                    <p className="highlight"> patterns </p>
                    <p className="regular"> in your data. Then, you can input new conditions (observations) and it will predict the outcome!</p>
                    <br/> <br/>
                    <p className="regular"> Here is a graph of the general machine learning process: </p>
                </div>
                <img className="img_details" src={overview_details}/> 
                <NavLink to={appRoutes.home}>
                    <button className="back_button"> Back </button>
                </NavLink>


            </div>
        )
    }
}

export default OverviewDetailsPage;