/**
* This file kicks off the build process for the application.  It also attaches
* the Lore singleton to the window, so you can access it from the command line
* in case you need to play with it or want to manually kick off actions or check
* the reducer state (through `lore.actions.xyz`, `lore.reducers.xyz`,
* `lore.models.xyz`, etc.)
**/

var lore = require('lore');

// Allows you to access your lore app globally as well as from within
// the console. Remove this line if you don't want to be able to do that.
window.lore = lore;

// Summon the app!
lore.summon({
  hooks: {
    actions: require('lore-hook-actions'),
    bindActions: require('lore-hook-bind-actions'),
    collections: require('lore-hook-collections'),
    connections: require('lore-hook-connections'),
    connect: require('lore-hook-connect'),
    dialog: require('lore-hook-dialog'),
    models: require('lore-hook-models'),
    reducers: require('lore-hook-reducers'),
    redux: require('lore-hook-redux')
  }
});
