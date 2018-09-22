import * as React from 'react';
import './containers/App.css';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import history from './history';

class App extends React.Component {
  public render() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
