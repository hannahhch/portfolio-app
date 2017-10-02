import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path = "/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root')
);

registerServiceWorker();
