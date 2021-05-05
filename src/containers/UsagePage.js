import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../appRoutes";
import usage_top from "../assets/usage_top.png";
import usage from "../assets/usage.png";

import metrics_lefthalf from "../assets/metrics_left.png";



class UsagePage extends Component {
    render () {
        return (
            <div className="Overview">
                <img className="progress_bar" src={usage_top}/>
                <div className="row mainpage"> 
                    <div className="col-4"> 
                        <NavLink to={appRoutes.metrics}>
                            <img className="left_button" src={metrics_lefthalf}/>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to={appRoutes.home}>
                            <img className="center_button" src={usage}/>
                        </NavLink>
                    </div>
                    <div className="col-4"> 

                    </div>               
                </div>
            </div>
        )
    }
}

export default UsagePage;