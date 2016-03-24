var Promise = require('bluebird');
var util = require('util');
var _ = require('lodash');
var path = require('path');
var generateTarget = require('./target');
var debug = require('debug')('lore:generate:generate');

module.exports = generate = function ( Generator, scope ) {
  scope.args = scope.args || [];
  scope.rootPath = scope.rootPath || process.cwd();

  return Generator.before(scope).then(function () {
    if ( Generator.name === void 0 ) {
      debug('Warning: generator missing name.')
    }

    debug('Generating \'' + Generator.name + '\' at ' + scope.rootPath + '...');

    var targets = Generator.targets(scope);
    Promise.map(Object.keys(targets), function ( keyPath ) {
      var target = targets[keyPath];
      var err;

      if ( !target ) throw new Error('Generator error: Invalid target: {"' + keyPath + '": ' + util.inspect(target) + '}');

      var targetScope = _.merge({}, scope, {
        rootPath: path.resolve(scope.rootPath, keyPath),
        keyPath: keyPath
      });

      return generateTarget({
        target: target,
        parent: Generator,
        scope: targetScope,
        recursiveGenerate: generate,
        log: true
      });

    }).then(function () {
      return Generator.after();
    });
  });
};
