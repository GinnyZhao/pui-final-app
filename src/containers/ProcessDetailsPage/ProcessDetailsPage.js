import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../appRoutes";

import process_top from "../../assets/process_top.png";
import process_title from "../../assets/process_title.png";
import collection from "../../assets/collection.png";
import preparation from "../../assets/preparation.png";
import selection from "../../assets/selection.png";

import "./ProcessDetailsPage.css"

class ProcessDetailsPage extends Component {
    render () {
        return (
            <div className="details">
                <img className="progress_bar" src={process_top} alt="Progress bar for data processing"/>
                <img className="title" src={process_title} alt="Title: data processing"/>
                <div className="content">
                    <p className="regular"> Before fitting any models to our data, it is important to convert our raw data to a much more  </p>
                    <p className="highlight"> usable and desired form </p>
                    <p className="regular"> (i.e. making it more meaningful and informative). The steps to perform are as follows:</p>
                    <br/> <br/>
                    <p className="subtitle"> Collection </p>
                    <img className="process_icon" src={collection}/> 
                    <br/>
                    <p className="regular"> The most crucial step when starting with ML is to have data of </p>
                    <p className="highlight"> good quality and accuracy. </p>
                    <p className="regular"> Common sources are data.gov.in, Kaggle or UCI dataset repository. Industries corps also use Amazon Mechanic Turk to collect massive amount of data.</p>

                    <br/> <br/>
                    <p className="subtitle"> Preparation </p>
                    <img className="process_icon" src={preparation}/> 
                    <br/>
                    <p className="regular"> The collected data can be in a raw form which can’t be directly fed to the machine. So, this is a process of</p>
                    <p className="highlight"> collecting </p>
                    <p className="regular"> datasets from different sources,</p>
                    <p className="highlight"> analyzing </p>
                    <p className="regular"> these datasets and then </p>
                    <p className="highlight"> constructing </p>
                    <p className="regular"> a new dataset for further processing and exploration.</p>
                    <br/> <br/>
                    <p className="subtitle"> Feature Selection </p>
                    <img className="process_icon" src={selection}/> 
                    <br/> 
                    <p className="regular"> Feature Selection is the process where you automatically or manually select those features which</p>
                    <p className="highlight"> contribute most to your prediction variable. </p>
                    <p className="regular"> If done appropriately, feature selection enables the machine learning algorithm to train faster and reduces the complexity of a model and makes it easier to interpret.</p>


                </div>
                <NavLink to={appRoutes.process}>
                    <button className="back_button"> Back </button>
                </NavLink>


            </div>
        )
    }
}

export default ProcessDetailsPage;