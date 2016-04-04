import * as ACTIONS from './constants';

/**
 * Drag an existing guide line
 * @param  {string} id
 * @param  {string} orientation 'horizontal' | 'vertical'
 * @param  {number} location
 * @return {object}
 */
export const dragGuideLine = (id, location) => {
  return {
    type: ACTIONS.DRAG_GUIDELINE,
    payload: {
      id,
      location: (location - 1) // Account for lines actually being 3 pixels in thickness
    }
  };
};

export const dropGuideLine = (id) => {
  return {
    type: ACTIONS.DROP_GUIDELINE,
    payload: {
      id
    }
  };
};

/**
 * Create a new guide line arbitrarily
 * @param  {string} orientation 'horizontal' | 'vertical'
 * @param  {number} location
 * @param  {string} id Optional provided ID
 * @return {object}
 */
export const createGuideLine = (orientation, location, id) => {
  return {
    type: ACTIONS.CREATE_GUIDELINE,
    payload: {
      id,
      orientation,
      location: (location - 1) // Account for lines actually being 3 pixels in thickness
    }
  };
};

/**
 * Delete a guide line by ID
 * @param  {string} id Ruler ID
 * @return {object}
 */
export const deleteGuideLine = (id) => {
  return {
    type: ACTIONS.DELETE_GUIDELINE,
    payload: {
      id
    }
  };
};

/**
 * Clear all guide lines
 * @return {object}
 */
export const clearGuideLines = () => {
  return {
    type: ACTIONS.CLEAR_GUIDELINES
  };
};
