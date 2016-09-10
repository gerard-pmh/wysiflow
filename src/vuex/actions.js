function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const selectComponent = makeAction('SELECT_COMPONENT');
export const deselectComponent = makeAction('DESELECT_COMPONENT');
export const addNode = makeAction('ADD_NODE');
export const deleteNode = makeAction('DELETE_NODE');
