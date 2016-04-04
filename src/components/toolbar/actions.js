import * as ACTIONS from './constants';

export const toggleButton = button => ({
  type: ACTIONS.TOGGLE_BUTTON,
  payload: {
    button
  }
});
