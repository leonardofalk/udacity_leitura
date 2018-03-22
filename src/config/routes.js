import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncComponent from '../components/AsyncComponent';

const AsyncHome = AsyncComponent(() => import('../containers/Home'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
  </Switch>
);

export default Routes;
