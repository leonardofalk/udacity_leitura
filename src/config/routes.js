import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../containers/Home';

const Routes = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
  </Fragment>
);

export default Routes;
