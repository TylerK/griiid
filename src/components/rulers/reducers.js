import {
  CLEAR_GUIDELINES,
  CREATE_GUIDELINE,
  DELETE_GUIDELINE,
  DRAG_GUIDELINE
} from './actions';

const initialState = {
  rulers: []
};

/**
 * Update an existing guideline's state
 */
const dragGuideLine = (state, action) => Object.assign({}, state, {
  rulers: state.rulers
    .filter(ruler => ruler.id !== action.payload.id)
    .concat({
      id: action.payload.id,
      location: action.payload.location,
      orientation: action.payload.orientation
    })
});

/**
 * Add a new guideline to state
 */
const createGuideLine = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.concat({
    id: action.payload.id,
    location: action.payload.location,
    orientation: action.payload.orientation
  })
});

/**
 * Delete guideline from state.
 */
const deleteGuideline = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.filter(ruler => ruler.id !== action.payload.id)
});

/**
 * Clear all guidelines from state
 */
const clearGuideLines = state => Object.assign({}, initialState);

/**
 * Guidelines Reducer
 */
export default function guidelinesReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_GUIDELINE: return createGuideLine(state, action);
    case DELETE_GUIDELINE: return deleteGuideline(state, action);
    case DRAG_GUIDELINE: return dragGuideLine(state, action);
    case CLEAR_GUIDELINES: return clearGuideLines(state);
    default: return state;
  }
};
