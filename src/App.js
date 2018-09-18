import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';
import ErrorPage from './routes/ErrorPage';
import IndexPage from './routes/IndexPage';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
