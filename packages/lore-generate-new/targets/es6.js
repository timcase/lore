var path = require('path');

function common(template) {
  return path.join('common', template);
}

function es6(template) {
  return path.join('es6', template);
}

module.exports = {

  // root
  './.babelrc': {copy: es6('.babelrc')},
  './.editorconfig': {copy: common('editorconfig.template')},
  './.gitignore': {copy: common('gitignore')},
  './index.html': {copy: common('index.html')},
  './index.js': {copy: es6('index.js')},
  './.lorerc': {copy: es6('lorerc')},
  './gulpfile.js': {copy: es6('gulpfile.js')},
  './package.json': {template: es6('package.json')},
  './README.md': {template: common('./README.md')},
  './routes.js': {copy: es6('routes.js')},
  './server.js': {copy: es6('server.js')},
  './webpack.config.js': {copy: es6('webpack.config.js')},

  // webpack
  './webpack/config.js': {copy: es6('webpack/config.js')},
  './webpack/README.md': {copy: common('webpack/README.md')},
  './webpack/env/development.js': {copy: es6('webpack/env/development.js')},
  './webpack/env/production.js': {copy: es6('webpack/env/production.js')},
  './webpack/env/README.md': {copy: common('webpack/env/README.md')},

  // src
  './src/README.md': {copy: common('src/README.md')},

  // actions
  './src/actions/README.md': {copy: common('src/actions/README.md')},

  // collections
  './src/collections/README.md': {copy: common('src/collections/README.md')},

  // components
  './src/components/README.md': {copy: common('src/components/README.md')},
  './src/components/Layout.js': {copy: es6('src/components/Layout.js')},
  './src/components/Master.js': {copy: es6('src/components/Master.js')},

  // constants
  './src/constants/README.md': {copy: common('src/constants/README.md')},
  './src/constants/ActionTypes.js': {copy: es6('src/constants/ActionTypes.js')},
  './src/constants/PayloadStates.js': {copy: es6('src/constants/PayloadStates.js')},

  // dialogs
  './src/dialogs/.gitkeep': {copy: common('.gitkeep')},

  // mixins
  './src/mixins/.gitkeep': {copy: common('.gitkeep')},

  // mixins
  './src/models/README.md': {copy: common('src/models/README.md')},

  // reducers
  './src/reducers/README.md': {copy: common('src/reducers/README.md')},

  // config
  './config/actionBlueprints.js': {copy: es6('config/actionBlueprints.js')},
  './config/actions.js': {copy: es6('config/actions.js')},
  './config/collections.js': {copy: es6('config/collections.js')},
  './config/connect.js': {copy: es6('config/connect.js')},
  './config/dialog.js': {copy: es6('config/dialog.js')},
  './config/local.js': {copy: es6('config/local.js')},
  './config/models.js': {copy: es6('config/models.js')},
  './config/reducerActionMap.js': {copy: es6('config/reducerActionMap.js')},
  './config/reducerBlueprints.js': {copy: es6('config/reducerBlueprints.js')},
  './config/reducers.js': {copy: es6('config/reducers.js')},
  './config/redux.js': {copy: es6('config/redux.js')},
  './config/router.js': {copy: es6('config/router.js')},
  './config/README.md': {copy: common('config/README.md')},

  // config/env
  './config/env/development.js': {copy: es6('config/env/development.js')},
  './config/env/production.js': {copy: es6('config/env/production.js')},
  './config/env/README.md': {copy: common('config/env/README.md')},

  // gulp
  './gulp/tasks/default.js': {copy: es6('gulp/tasks/default.js')},
  './gulp/tasks/README.md': {copy: common('gulp/tasks/README.md')},

  // initializers
  './initializers/REAMDE.md': {copy: common('initializers/README.md')}

};