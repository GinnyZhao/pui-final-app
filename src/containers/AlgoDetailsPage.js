import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../appRoutes";

import algo_top from "../assets/algo_top.png";
import algo_title from "../assets/algo_title.png";
import algo_details from "../assets/algo_details.png";

class AlgoDetailsPage extends Component {
    render () {
        return (
            <div className="details">
                <img className="progress_bar" src={algo_top} alt="Top progress bar for algorithm page"/>
                <img className="title" src={algo_title} alt="Title: Algorithms"/>
                <div className="content">
                    <p className="regular"> There are a lot of different machine learning algorithms, differing in their approach, the type of data they input and output, and the type of task or problem that they are intended to solve.  </p>
                    <br/> <br/>
                    <p className="subtitle"> Supervised Learning </p>
                    <p className="regular"> Supervised learning is a type of machine learning where the data you put into the model is </p>
                    <p className="highlight"> "labeled" </p>
                    <p className="regular"> Labeled simply means that </p>
                    <p className="highlight"> the outcome of the observation is known. </p>
                    <p className="regular"> For example, if your model is trying to predict whether your friends will go golfing or not, you might have variables like the temperature, the day of the week, etc. If your data is labeled, you would also have a variable that has a value of 1 if your friends actually went golfing or 0 if they did not.</p>
                    <br/> <br/>
                    <p className="subtitle"> Unsupervised Learning </p>
                    <p className="regular"> As you may have guessed, unsupervised learning is the</p>
                    <p className="highlight"> opposite of supervised learning </p>
                    <p className="regular"> when it comes to labeled data. With unsupervised learning, you do not know whether your friends went golfing or not — it is up to the computer to find patterns via a model to guess what happened or predict what will happen.</p>
                    <br/> <br/>
                    <p className="subtitle"> Reinforcement Learning </p>                    
                    <p className="regular"> Reinforcement learning is about taking suitable action to </p>
                    <p className="highlight"> maximize reward </p>
                    <p className="regular"> in a particular situation. It is employed by various software and machines to find the best possible behavior or path it should take in a specific situation.</p>
                </div>

                <img className="img_details" src={algo_details} alt="different algorithms"/> 

                <NavLink to={appRoutes.algo}>
                    <button className="back_button"> Back </button>
                </NavLink>


            </div>
        )
    }
}

export default AlgoDetailsPage;