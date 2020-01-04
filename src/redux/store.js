let state = {};
let observers = [];

export const createStore = (reducer) => {
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);

    observers.forEach(fn => fn());
  }

  function subscribe(fn) {
    observers.push(fn);
  }

  dispatch({type: 'initial'});

  return {
    getState,
    dispatch,
    subscribe,
  }
}

