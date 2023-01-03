import React, {useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import {useGlobalState} from  "./state/context/Context.js"
import {ConversionPage, FieldCementing, ResultPrimary, ResultPlug ,Additive, Header,
        BumpPressure, Volume_Capacity, SideBar} from './components';
import "./App.css";        


function App() {
  const location = useLocation();
  const path = location.pathname;
  const {sidebar, setMode, setNavMode}= useGlobalState();

  const SideBarShow = ()=> {
    if(sidebar) {return <SideBar/>}
    else {return null}
  }

  useEffect(() => {
    if(path==="/"){
      setMode("unit-conversion");
      setNavMode("unit-conversion");
    }
  }, [setMode,setNavMode, path])
  
  return (
    <main>
      <Header />
      <div className="app_container">
      <section>
      {SideBarShow()}
      </section>
      <section>
      <Switch>
       <Route path="/" exact component={ConversionPage}/>
       <Route path="/select/field-unit-converter" exact component={ConversionPage}/>
       <Route path="/select/primary" exact component={FieldCementing}/>
       <Route path="/select/result-primary" exact component={ResultPrimary}/>
       <Route path="/select/result-plug" exact component={ResultPlug}/>
       <Route path="/select/additive" exact component={Additive}/>
       <Route path="/select/bump-pressure" exact component={BumpPressure}/>
       <Route path="/select/volume-capacity" exact component={Volume_Capacity}/>
      </Switch>
      </section>
      </div>
    </main>
  );
}

export default App;
