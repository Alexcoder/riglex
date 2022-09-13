import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Navigation, ConversionPage, FieldCementing, ResultPrimary, ResultPlug ,Additive, Header} from './components';


function App() {
  return (
    <div>
      <Header />
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/select" exact component={Navigation}/>
       <Route path="/select/field-unit-converter" exact component={ConversionPage}/>
       <Route path="/select/primary" exact component={FieldCementing}/>
       <Route path="/select/result-primary" exact component={ResultPrimary}/>
       <Route path="/select/result-plug" exact component={ResultPlug}/>
       <Route path="/select/additive" exact component={Additive}/>
      </Switch>
    </div>
  );
}

export default App;
