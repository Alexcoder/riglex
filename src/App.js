import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Navigation} from './components';


function App() {
  return (
    <div>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/navigation" exact component={Navigation}/>
      </Switch>
      {/* PRIMARY/PLUG CEMENTING PAGE
      PRIMARY/PLUG CEMENTING RESULT
      MIXFLUID PAGE
      QUIZ PAGE */}
    </div>
  );
}

export default App;
