import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage, MusicPage, TechPage } from './Pages';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
  <RootNavigation />
  ), document.getElementById('root')
)

function RootNavigation() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <AppRouter />
          </Route>
          <Route path="*">
            <div>I'm afraid I can't allow that, Dave</div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function AppRouter() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/music">
            <MusicPage />
          </Route>
          <Route path="/tech">
            <TechPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
