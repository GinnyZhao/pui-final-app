import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../appRoutes";
import algo_top from "../assets/algo_top.png";
import algo from "../assets/algo.png";

import process_lefthalf from "../assets/process_left.png";
import metrics_righthalf from "../assets/metrics_right.png";


class AlgoPage extends Component {
    render () {
        return (
            <div className="Overview">
                <img className="progress_bar" src={algo_top}/>
                <div className="row mainpage"> 
                    <div className="col-4"> 
                        <NavLink to={appRoutes.process}>
                            <img className="left_button" src={process_lefthalf}/>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to={appRoutes.home}>
                            <img className="center_button" src={algo}/>
                        </NavLink>
                    </div>
                    <div className="col-4"> 
                        <NavLink to={appRoutes.metrics}>
                            <img className="right_button" src={metrics_righthalf} />
                        </NavLink>
                    </div>               
                </div>
            </div>
        )
    }
}

export default AlgoPage;