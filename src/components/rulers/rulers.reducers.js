import {
  CREATE_RULER,
  DELETE_RULER,
  DRAG_RULER
} from './rulers.actions';

const initialState = {
  rulers: []
};

const dragRuler = (state, action) => Object.assign({}, state, {
  rulers: state.rulers
    .filter(ruler => ruler.id !== action.payload.id)
    .concat({
      id: action.payload.id,
      location: action.payload.location,
      orientation: action.payload.orientation
    })
});

const createRuler = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.concat({
    id: action.payload.id,
    location: action.payload.location,
    orientation: action.payload.orientation
  })
});

const deleteRuler = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.filter(ruler => ruler.id !== action.payload.id)
});

export default function rulersReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_RULER: return createRuler(state, action);
    case DELETE_RULER: return deleteRuler(state, action);
    case DRAG_RULER: return dragRuler(state, action);
    default: return state;
  }
};
