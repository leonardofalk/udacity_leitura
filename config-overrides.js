const { injectBabelPlugin } = require('react-app-rewired');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  const cfg = rewireReactHotLoader(
    injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config),
    env,
  );

  if (env === 'production') {
    cfg.devtool = false;
  }

  return cfg;
};
