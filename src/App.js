import React from 'react';
import {Route, Switch} from "react-router-dom";
import Carou from './MyComponents/carou/Carou';
import Weather from './MyComponents/weather/Weather';
import Todo from './MyComponents/todo/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Carou} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </>
  );
}

export default App;

