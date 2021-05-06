import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../appRoutes";

import metrics_top from "../assets/metrics_top.png";
import metrics_title from "../assets/metrics_title.png";
import confusion from "../assets/confusion.png";

class MetricsDetailsPage extends Component {
    render () {
        return (
            <div className="details">
                <img className="progress_bar" src={metrics_top} alt="Top progress bar for metrics page"/>
                <img className="title" src={metrics_title} alt="Title: Evaluating Metrics"/>
                <div className="content">
                    <p className="regular"> An evaluation metric quantifies the performance of a predictive model. There are many different types of evaluation metrics available to test a model. These include classification accuracy, logarithmic loss, confusion matrix, and so on. </p>
                    <br/> <br/>
                    <p className="subtitle"> Classification Accuracy </p>
                    <p className="regular"> Classification Accuracy is what we usually mean, when we use the term accuracy. It is the ratio of number of </p>
                    <p className="highlight"> correct predictions to the total number of input samples.</p>
                    <br/> <br/>
                    <p className="subtitle"> Confusion Matrix </p>
                    <p className="regular"> Confusion Matrix gives us a matrix as output and describes the complete performance of the model. </p>
                    <img className="img_details" src={confusion} alt="confusion matrix, precision and recall"/> 
                    <br/>
                    <p className="subtitle"> Mean Squared Error</p>

                    <p className="regular"> Mean Absolute Error is the average of the difference between the Original Values and the Predicted Values. It gives us the measure of how far the predictions were from the actual output. However, they don’t gives us any idea of the direction of the error i.e. whether we are under predicting the data or over predicting the data. </p>
                    <br/> <br/> <br/> 
                </div>


                <NavLink to={appRoutes.metrics}>
                    <button className="back_button"> Back </button>
                </NavLink>


            </div>
        )
    }
}

export default MetricsDetailsPage;