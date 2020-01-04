const initialState = {
  count: 0,
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'sub':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'initial':
    default:
      return initialState;
  }
}
