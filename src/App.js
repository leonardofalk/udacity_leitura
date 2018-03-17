import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './containers/Root';
import createStore from './redux';

const App = () => (
  <Provider store={createStore()}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

export default App;
