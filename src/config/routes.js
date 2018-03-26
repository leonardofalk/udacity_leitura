import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AsyncComponent from '../components/AsyncComponent';

const AsyncHome = AsyncComponent(() => import('../containers/Home'));
const AsyncPostNew = AsyncComponent(() => import('../containers/PostNew'));
const AsyncPostShow = AsyncComponent(() => import('../containers/PostShow'));
const AsyncPostEdit = AsyncComponent(() => import('../containers/PostEdit'));
const AsyncPostCommentNew = AsyncComponent(() => import('../containers/PostCommentNew'));
const AsyncPostCommentEdit = AsyncComponent(() => import('../containers/PostCommentEdit'));
const AsyncNotFound = AsyncComponent(() => import('../components/NotFound'));

const Routes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/404" component={AsyncNotFound} />
    <Route exact path="/:category" component={AsyncHome} />
    <Route exact path="/:category/:id" component={AsyncPostShow} />
    <Route exact path="/posts/new" component={AsyncPostNew} />
    <Route exact path="/posts/:id/edit" component={AsyncPostEdit} />
    <Route exact path="/posts/:id/comments/new" component={AsyncPostCommentNew} />
    <Route exact path="/comments/:id/edit" component={AsyncPostCommentEdit} />
  </Switch>
);

export default Routes;
