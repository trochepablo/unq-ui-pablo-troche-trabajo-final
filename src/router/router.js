import React from 'react';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import Layout from '../layout';
import App from '../components/App';

function RouterConfig() {
  return (
    <BrowserRouter>
        <Switch>
          <RouteWrapper path="/" component={App} layout={Layout} />
        </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;