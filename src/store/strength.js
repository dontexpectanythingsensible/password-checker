export const STRENGTH_CHANGE = 'STRENGTH_CHANGE';

export function strengthChange (strength) {
  return {
    type: STRENGTH_CHANGE,
    payload: strength
  };
}

export const updateStrength = ({ dispatch }) => {
  return nextStrength => dispatch(strengthChange(nextStrength));
};

const initalState = null;

export default function strengthReducer (state = initalState, action) {
  return action.type === STRENGTH_CHANGE
    ? action.payload
    : state;
}
