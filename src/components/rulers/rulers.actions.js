import uuid from 'uuid-lib';

export const CREATE_RULER = 'CREATE_RULER';
export const DELETE_RULER = 'DELETE_RULER';
export const DRAG_RULER = 'DRAG_RULER';

export const dragRuler = (id, orientation, location) => {
  return {
    type: DRAG_RULER,
    payload: {
      id,
      orientation,
      location
    }
  };
};

export const createRuler = (orientation, location) => {
  const id = uuid.create();
  return {
    type: CREATE_RULER,
    payload: {
      id: id.value,
      orientation,
      location
    }
  };
};

export const deleteRuler = () => {
  return { type: DELETE_RULER };
};
