import * as ACTIONS from './constants';

export const clearPalettes = () => ({
  type: ACTIONS.CLEAR_PALETTES
});

export const togglePalette = palette => ({
  type: ACTIONS.TOGGLE_PALETTE,
  payload: {
    palette
  }
});
