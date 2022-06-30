import "./App.css"

import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

import { Films } from "./Components/Pages/Films/Films";
import { Serials } from "./Components/Pages/Serials/Serials";
import {Animation} from "./Components/Pages/Animation/Animation"
import { Collection } from "./Components/Pages/Collection/Collection";
import { Home } from "./Components/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div>
          <Routes>
           <Route path="/films"element={<Films/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/serials" element={<Serials/>}/>
            <Route path="/animation" element={<Animation/>}/>
            <Route path="/collection" element={<Collection/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
