import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../appRoutes";
import metrics_top from "../assets/metrics_top.png";
import metrics from "../assets/metrics.png";

import algo_lefthalf from "../assets/algo_left.png";
import usage_righthalf from "../assets/usage_right.png";


class MetricsPage extends Component {
    render () {
        return (
            <div className="Overview">
                <img className="progress_bar" src={metrics_top}/>
                <div className="row mainpage"> 
                    <div className="col-4"> 
                        <NavLink to={appRoutes.algo}>
                            <img className="left_button" src={algo_lefthalf}/>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to={appRoutes.home}>
                            <img className="center_button" src={metrics}/>
                        </NavLink>
                    </div>
                    <div className="col-4"> 
                        <NavLink to={appRoutes.usage}>
                            <img className="right_button" src={usage_righthalf} />
                        </NavLink>
                    </div>               
                </div>
            </div>
        )
    }
}

export default MetricsPage;