import React, { Component,} from "react";
import { NavLink } from "react-router-dom";
import appRoutes from "../../appRoutes";
import "./HomePage.css";
import overview_top from "../../assets/overview_top.png";
import overview from "../../assets/overview.png";

import process_righthalf from "../../assets/process_righthalf.png";


class HomePage extends Component {
    render () {
        return (
            <div className="Overview">
                <img className="progress_bar" src={overview_top}/>
                <div className="row mainpage"> 
                    <div className="col-4"> </div>
                    <div className="col-4">
                        <NavLink to={appRoutes.home}>
                            <img className="center_button" src={overview}/>
                        </NavLink>
                    </div>
                    <div className="col-4"> 
                        <NavLink to={appRoutes.process}>
                            <img className="right_button" src={process_righthalf} />
                        </NavLink>
                    </div>               
                </div>
            </div>
        )
    }
}

export default HomePage;