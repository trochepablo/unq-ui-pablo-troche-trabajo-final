import React from 'react';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import Layout from '../layout';
import { PVSP, PVSPC } from '../views/pv';
import App from '../views/home/App' 

function RouterConfig() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={App} layout={Layout} />
        <RouteWrapper exact path="/pvsp" component={PVSP} layout={Layout} />
        <RouteWrapper exact path="/pvspc" component={PVSPC} layout={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;