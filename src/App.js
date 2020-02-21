import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulator from './simulator';
import PaymentsYear from './components/PaymentsYear';
import Result from './components/Result';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Simulator} />
          <Route path="/result" component={Result} />
          <Route paht="/paymentsYear" component={PaymentsYear} />
        </Switch>
      </Router>
    );
  }
}

    // export default App;
