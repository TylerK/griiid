export const CREATE_RULER = 'CREATE_RULER';
export const DELETE_RULER = 'DELETE_RULER';

export const createRuler = (orientation, location) => {
  return {
    type: CREATE_RULER,
    payload: {
      orientation,
      location
    }
  };
};

export const deleteRuler = () => {
  return { type: DELETE_RULER };
};
