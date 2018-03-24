import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncComponent from '../components/AsyncComponent';

const AsyncHome = AsyncComponent(() => import('../containers/Home'));
const AsyncPostNew = AsyncComponent(() => import('../containers/PostNew'));
const AsyncPostShow = AsyncComponent(() => import('../containers/PostShow'));
const AsyncPostEdit = AsyncComponent(() => import('../containers/PostEdit'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/posts" component={AsyncHome} />
    <Route exact path="/posts/new" component={AsyncPostNew} />
    <Route exact path="/posts/:id" component={AsyncPostShow} />
    <Route exact path="/posts/:id/edit" component={AsyncPostEdit} />
  </Switch>
);

export default Routes;
