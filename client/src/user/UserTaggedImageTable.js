import React from 'react';
import './Router.css';
import TaggerNavBar from "../navigation/Navbar";
import {Route , BrowserRouter, Switch} from "react-router-dom";
import Repository from "../repository/Repository";
import AnnotateComponent from "../annotate/AnnotateComponent";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <TaggerNavBar/>
                <Switch>
                    <Route exact path="/repository" component={Repository}/>
                    <Route exact path="/annotate" component={AnnotateComponent}/>
                    <Route exact path="/" component={AnnotateComponent}/>
                    <Route>
                        <div>Error</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;
