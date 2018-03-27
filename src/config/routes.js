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

/*
 * Aqui infelizmente não tem como aplicar o 404 no fim como fallback
 * pois não projetei dessa forma, os services é que fazem o redirect
 * e não a camada de view, assim eles redirecionam diretamente para
 * /404, e se as categorias ficarem na frente simplesmente não funciona.
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/404" component={AsyncNotFound} />
    <Route exact path="/posts/new" component={AsyncPostNew} />
    <Route exact path="/posts/:id/edit" component={AsyncPostEdit} />
    <Route exact path="/posts/:id/comments/new" component={AsyncPostCommentNew} />
    <Route exact path="/comments/:id/edit" component={AsyncPostCommentEdit} />
    <Route exact path="/:category" component={AsyncHome} />
    <Route exact path="/:category/:id" component={AsyncPostShow} />
  </Switch>
);

export default Routes;
