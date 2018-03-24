import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncComponent from '../components/AsyncComponent';

const AsyncHome = AsyncComponent(() => import('../containers/Home'));
const AsyncPostNew = AsyncComponent(() => import('../containers/PostNew'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/posts" component={AsyncHome} />
    <Route exact path="/posts/new" component={AsyncPostNew} />
  </Switch>
);

export default Routes;
