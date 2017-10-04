import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from "./components/BaseLayout";
import About from "./components/About";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import References from "./components/References";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path = "/contacts" component ={Contacts}/>
        <Route path = "/references" component={References}/>
        <Route path = "/about" component={About}/>
        <Route path = "/portfolio" component={Portfolio}/>
        <Route exact path = "/" component={Home} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root')
);

registerServiceWorker();
