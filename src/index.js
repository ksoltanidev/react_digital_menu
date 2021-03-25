import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Aboutme from './pages/Aboutme/Aboutme';
import Portofolio from './pages/Portofolio/Portofolio';
import Contacts from './pages/Contacts/Contacts';
import Freestyle from './pages/Freestyle/Freestyle';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>

        <Route path="/aboutme">
          <Aboutme />
        </Route>

        <Route path="/portofolio">
          <Portofolio />
        </Route>

        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/freestyle">
          <Freestyle />
        </Route>

        <Route path="/">
          <Aboutme />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
