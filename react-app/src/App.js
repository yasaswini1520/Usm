import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CompatRouter} from "react-router-dom";
import './App.css';
import React from "react";
import Home from "./React/Components/Home";
import Explore from "./React/Components/Explore";
import Contactus from "./React/Components/Contactus";
import Isin from "./React/Components/Isin";
import Sector from "./React/Components/Sector";
import Symbol from "./React/Components/Symbol";

//import Home from "./React/Components/Home";
function App() {
  return(
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/explore" element={<Explore />}/>
          <Route exact path="/contactus" element={<Contactus/>} />
         
          <Route path="/isin" element={<Isin/>} />
          <Route path="/sector" element={<Sector/>} />
          <Route path="/symbol" element={<Symbol/>} />
          
          </Routes>
         
      </BrowserRouter>
    </div>
  );
}
export default App;