var Promise = require('bluebird');
var spawn = require('child_process').spawn;
var debug = require('debug')('lore:generate:fauxserver');

module.exports = function ( scope ) {
  return new Promise(function ( resolve, reject ) {
    var cmd = 'npm install faux-server --save';
    debug("running: " + cmd);
    spawn('npm', ['install', 'faux-server', '--save'], {
      stdio: 'inherit'
    }).on('data', function ( data ) {
      debug(data);
    }).on('data', function ( data ) {
      debug(data);
    }).on('close', function ( code ) {
      if ( code !== 0 ) {
        reject(code);
      } else {
        resolve();
      }
    });
  });
};
