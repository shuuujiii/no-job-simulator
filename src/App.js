import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulator from './simulator';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Simulator} />
        </Switch>
      </Router>
    );
  }
}

    // export default App;
