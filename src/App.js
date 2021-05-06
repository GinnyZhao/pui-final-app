
import './App.css';
import { Component } from 'react';
import NavBar from "./containers/NavBar/NavBar";
import HomePage from "./containers/HomePage/HomePage";
import ProcessPage from "./containers/ProcessPage/ProcessPage";
import AlgoPage from "./containers/AlgoPage";
import MetricsPage from "./containers/MetricsPage";
import UsagePage from "./containers/UsagePage";
import Footer from "./containers/Footer/Footer";
import OverviewDetailsPage from "./containers/OverviewDetailsPage/OverviewDetailsPage";
import ProcessDetailsPage from "./containers/ProcessDetailsPage/ProcessDetailsPage";
import AlgoDetailsPage from "./containers/AlgoDetailsPage";
import MetricsDetailsPage from "./containers/MetricsDetailsPage";
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./appRoutes";
import { Transition } from 'react-transition-group';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="MainContent">
        <NavBar/>

        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>

          <Route exact path={appRoutes.process}>
            <ProcessPage />
          </Route>

          <Route exact path={appRoutes.algo}>
            <AlgoPage />
          </Route>

          <Route exact path={appRoutes.metrics}>
            <MetricsPage />
          </Route>

          <Route exact path={appRoutes.usage}>
            <UsagePage />
          </Route>

          <Route exact path={appRoutes.overview_d}>
            <OverviewDetailsPage />
          </Route>

          <Route exact path={appRoutes.process_d}>
            <ProcessDetailsPage />
          </Route>

          <Route exact path={appRoutes.algo_d}>
            <AlgoDetailsPage />
          </Route>

          <Route exact path={appRoutes.metrics_d}>
            <MetricsDetailsPage />
          </Route>
          



          <Redirect to={appRoutes.home} />
        </Switch>
        <Footer/>
        
      </div>
      </BrowserRouter>
    )
  }
}
export default App;
