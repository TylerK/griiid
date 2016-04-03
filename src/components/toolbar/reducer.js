import * as ACTIONS from './constants';

const initialState = {
  button: null,
};

const toggleButton = (state, action) => Object.assign({}, state, {
  button: action.payload.button === state.button ? null : action.payload.button
});

export default function toolBarReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_BUTTON: return toggleButton(state, action);
    default: return state;
  }
}
