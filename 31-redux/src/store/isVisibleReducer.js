const CHANGE = '/change';

export const change = () => ({ type: CHANGE });

const initialState = true;

const isVisibleReducer = (state = initialState, action) => {
  console.log(state, action);
  if (action.type === CHANGE) return !state;

  return state;
};

export default isVisibleReducer;
