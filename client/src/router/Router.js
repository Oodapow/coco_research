import React from 'react';
import {Route , BrowserRouter, Switch} from "react-router-dom";
import TaggerNavBar from "../navigation/Navbar";
import Repository from "../repository/Repository";
import AnnotateComponent from "../annotate/AnnotateComponent";
import User from "../user/User";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/repository" component={Repository}/>
                    <Route exact path="/user" component={User}/>
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
