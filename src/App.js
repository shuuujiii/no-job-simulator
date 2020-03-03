import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulator from './components/Simulator';
import ExtraodinaryOutcome from './components/ExtraodinaryPayment';
import Result from './components/Result';

import store from './store';

export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Simulator} />
            <Route path="/result" component={Result} />
            <Route paht="/paymentsYear" component={ExtraodinaryOutcome} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

    // export default App;
