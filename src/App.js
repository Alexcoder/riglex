import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Navigation, ConversionPage} from './components';


function App() {
  return (
    <div>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/navigation" exact component={Navigation}/>
       <Route path="/field-unit-converter" exact component={ConversionPage}/>
      </Switch>
    </div>
  );
}

export default App;
