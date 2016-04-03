import * as ACTIONS from './constants';

const initialState = {
  palette: null
};

const clearPalettes = () => initialState;

const togglePalette = (state, action) => Object.assign({}, state, {
  palette: action.payload.palette === state.palette ? null : action.payload.palette
});

export default function paletteReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CLEAR_PALETTES: return clearPalettes();
    case ACTIONS.TOGGLE_PALETTE: return togglePalette(state, action);
    default: return state;
  }
}
