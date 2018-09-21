import * as React from 'react';
import './containers/App.css';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
        <Switch>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/' component={Home}/>
        </Switch>
    );
  }
}

export default App;
