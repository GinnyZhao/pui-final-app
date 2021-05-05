import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../appRoutes";
import "./ProcessPage.css";
import process_top from "../../assets/process_top.png";
import process from "../../assets/process.png";

import overview_lefthalf from "../../assets/overview_left.png";
import algo_righthalf from "../../assets/algo_right.png";


class ProcessPage extends Component {
    render () {
        return (
            <div className="Overview">
                <img className="progress_bar" src={process_top}/>
                <div className="row mainpage"> 
                    <div className="col-4"> 
                        <NavLink to={appRoutes.home}>
                            <img className="left_button" src={overview_lefthalf}/>
                        </NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink to={appRoutes.home}>
                            <img className="center_button" src={process}/>
                        </NavLink>
                    </div>
                    <div className="col-4"> 
                        <NavLink to={appRoutes.algo}>
                            <img className="right_button" src={algo_righthalf} />
                        </NavLink>
                    </div>               
                </div>
            </div>
        )
    }
}

export default ProcessPage;