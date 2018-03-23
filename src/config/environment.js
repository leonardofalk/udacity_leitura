import Immutable from 'seamless-immutable';

const { NODE_ENV, REACT_APP_API_URL = 'http://localhost:3001' } = process.env;

const environment = Immutable({
  development: NODE_ENV === 'development',
  test: NODE_ENV === 'test',
  production: NODE_ENV === 'production',
});

const API_URL = REACT_APP_API_URL;

export {
  API_URL,
  environment,
};
