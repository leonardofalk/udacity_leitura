/* eslint-disable import/prefer-default-export */
import Immutable from 'seamless-immutable';

const { NODE_ENV } = process.env;

export const environment = Immutable({
  development: NODE_ENV === 'development',
  test: NODE_ENV === 'test',
  production: NODE_ENV === 'production',
});
