import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Test from './test/test';
import Home from './pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/test">
            <Test/>
          </Route>
          <Route path="/portofolio">
            <Home/>
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
