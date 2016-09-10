function makeAction(type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const addNode = makeAction('ADD_NODE');
export const deleteNode = makeAction('DELETE_NODE');
