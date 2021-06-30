import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import Cursor from './components/cursor/cursor';
import CursorContextProvider from './components/cursorContext/cursorContext';
import Menu from './components/menu/Menu';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <CursorContextProvider>
            <div className={"homeContainer"}>
              <Cursor />
              <Menu />
            </div>
          </CursorContextProvider>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
