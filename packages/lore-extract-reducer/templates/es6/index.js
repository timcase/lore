import { ActionTypes } from 'lore-utils';
import byId from './byId';
import byCid from './byCid';
import find from './find';

var initialState = {
  byId: undefined,
  byCid: undefined,
  find: undefined
};

export default function (state, action) {
  let nextState = state || initialState;

  // If we receive an action to reset the store (such as when logging out)
  // reset the state to the initial state
  if (action.type === ActionTypes.RESET_STORE) {
    nextState = initialState;
  }

  const _byId = byId(nextState.byId, action);
  const _byCid = byCid(nextState.byCid, action);
  const _find = find(nextState.find, action, {
    nextState: {
      byCid: _byCid,
      byId: _byId
    }
  });

  return {
    byId: _byId,
    byCid: _byCid,
    find: _find
  };
}
