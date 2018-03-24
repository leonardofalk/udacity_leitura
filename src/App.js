import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './containers/Root';
import createStore from './redux';

const App = () => (
  <StrictMode>
    <Provider store={createStore()}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

export default App;
