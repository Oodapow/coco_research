import './App.css';
import Router from "./router/Router";
import TaggerNavBar from "./navigation/Navbar";
import React from "react";
import { createBrowserHistory } from 'history';

function App() {
    return (
        <div className="App">
            <TaggerNavBar/>
            <Router>
            </Router>
        </div>
    );
}

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

export default App;
