const _ = require('lodash');
const { defaultOptions, validatePartialPairs } = require('../utils');

/*
 * Blueprint for Update method
 */
module.exports = function(opts = {}) {
  // clone the options so we don't unintentionally modify them
  let options = _.cloneDeep(opts);

  options = _.defaultsDeep(options, defaultOptions);

  if (!options.model) {
    throw new Error('Must specify a model');
  }

  const Model = options.model;

  validatePartialPairs(options);

  return function update(model, params) {
    return function(dispatch) {
      const proxyModel = new Model(model.data);
      proxyModel.set(params);

      proxyModel.save().then(function() {
        if (options.onSuccess) {
          dispatch({
            type: options.onSuccess.actionType,
            payload: _.merge(model, {
              data: proxyModel.toJSON(),
              state: options.onSuccess.payloadState
            })
          });
        }
      }).catch(function(response) {
        const error = response.data;

        if (response.status === 404) {
          if (options.onNotFound) {

            if (options.onNotFound.beforeDispatch) {
              options.onNotFound.beforeDispatch(response, [model]);
            }

            dispatch({
              type: options.onNotFound.actionType,
              payload: _.merge(model, {
                state: options.onNotFound.payloadState,
                error: error
              })
            });
          }
        } else if (options.onError) {

          if (options.onError.beforeDispatch) {
            options.onError.beforeDispatch(response, [model, params]);
          }

          dispatch({
            type: options.onError.actionType,
            payload: _.merge(model, {
              data: proxyModel.toJSON(),
              state: options.onError.payloadState,
              error: error
            })
          });
        }
      });

      if (options.optimistic) {
        return dispatch({
          type: options.optimistic.actionType,
          payload: _.merge(model, {
            data: proxyModel.toJSON(),
            state: options.optimistic.payloadState
          })
        });
      }
    };
  };
};
