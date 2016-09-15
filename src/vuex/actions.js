function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const selectComponent = makeAction('SELECT_COMPONENT');
export const dragComponent = makeAction('DRAG_COMPONENT');
export const dropComponent = makeAction('DROP_COMPONENT');
export const addNode = makeAction('ADD_NODE');
export const deleteNode = makeAction('DELETE_NODE');
