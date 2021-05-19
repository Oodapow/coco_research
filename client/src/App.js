import './App.css';
import Router from "./router/Router";
import TaggerNavBar from "./navigation/Navbar";
import React from "react";

function App() {
    return (
        <div className="App">
            <TaggerNavBar/>
            <Router>
            </Router>
        </div>
    );
}
export default App;
