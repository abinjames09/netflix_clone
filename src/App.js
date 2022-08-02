import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {Action,originals,Comedy} from './urls'
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost  url= {originals} title='Netflix Originals'/>
    <RowPost  url ={Action} title='Action ' isSmall/>
    <RowPost  url ={Comedy} title='Comedy' isSmall/>
    </div>
  );
}

export default App;
