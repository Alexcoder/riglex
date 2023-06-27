import {Routes, Route } from 'react-router-dom';
import Header from "./components/Header/HeaderNav.js";
import Navbar from './components/NavBar/Navbar.jsx';
import P1338 from "./components/Primary/1338/1338.js";
import P958 from "./components/Primary/958/958.js";
import P7inch from "./components/Primary/7inch/7inch.js";
import ResultCsgJob from './components/Primary/Result/Result.jsx';

import UniformStinger from './components/Plug/UniformStinger/UniformStinger.jsx';
import WithDrillPipe from './components/Plug/WithDrillPipe/WithDrillPipe.jsx';


import Additive from './components/Additive/Additive.js';
import Conversion from "./components/Conversion/Conversion.js";

import "./App.css";        


function App() {
  
  return (
    <main style={{width:"auto", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/1338" element={<P1338/>} />
          <Route path="/958" element={<P958/>} />
          <Route path="/7inch" element={<P7inch/>} />
          <Route path="/result" element={<ResultCsgJob/>} />
          <Route path="/additive" element={<Additive/>} />
          <Route path="/unit-converter" element={<Conversion/>} />

          <Route path="/plug/uniform-stinger" element={<UniformStinger/>} />
          <Route path="/plug/with-drill-pipe" element={<WithDrillPipe/>} />


        </Routes>
    </main>
  );
}

export default App;
