import uuid from 'uuid-lib';

export const CLEAR_GUIDELINES = 'CLEAR_GUIDELINES';
export const CREATE_GUIDELINE = 'CREATE_GUIDELINE';
export const DELETE_GUIDELINE = 'DELETE_GUIDELINE';
export const DRAG_GUIDELINE = 'DRAG_GUIDELINE';

/**
 * Drag an existing guide line
 * @param  {string} id
 * @param  {string} orientation 'horizontal' | 'vertical'
 * @param  {number} location
 * @return {object}
 */
export const dragGuideLine = (id, orientation, location) => {
  return {
    type: DRAG_GUIDELINE,
    payload: {
      id,
      orientation,
      location: (location - 1) // Account for lines actually being 3 pixels in thickness
    }
  };
};

/**
 * Create a new ruler arbitrarily
 * @param  {string} orientation 'horizontal' | 'vertical'
 * @param  {number} location
 * @return {object}
 */
export const createGuideLine = (orientation, location) => {
  const id = uuid.create();
  return {
    type: CREATE_GUIDELINE,
    payload: {
      id: id.value,
      orientation,
      location: (location - 1) // Account for lines actually being 3 pixels in thickness
    }
  };
};

/**
 * Delete a ruler by ID
 * @param  {string} id Ruler ID
 * @return {object}
 */
export const deleteGuideLines = (id) => {
  return {
    type: DELETE_GUIDELINE,
    payload: {
      id
    }
  };
};

/**
 * Clear all rulers
 * @return {object}
 */
export const clearGuideLines = () => {
  return {
    type: CLEAR_RULERS
  };
};
