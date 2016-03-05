import {
  CLEAR_GUIDELINES,
  CREATE_GUIDELINE,
  DELETE_GUIDELINE,
  DRAG_GUIDELINE,
  DROP_GUIDELINE
} from './actions';

const initialState = {
  guideLines: []
};

/**
 * Update an existing guideline's state while dragging
 */
const dragGuideLine = (state, action) => Object.assign({}, state, (() => {
  const { guideLines } = state;
  const { id, location } = action.payload;
  const orientation = guideLines.find(guide => guide.id === id).orientation;

  return {
    guideLines: guideLines
    .filter(guide => guide.id !== id)
    .concat({ id, location, orientation })
  };
})())

/**
 * Add a new guideline to state
 */
const createGuideLine = (state, action) => Object.assign({}, state, {
  guideLines: state.guideLines.concat({
    id: action.payload.id,
    location: action.payload.location,
    orientation: action.payload.orientation
  })
});

/**
 * Delete guideline from state.
 */
const deleteGuideline = (state, action) => Object.assign({}, state, {
  guideLines: state.guideLines.filter(ruler => ruler.id === action.payload.id)
});

/**
 * Clear all guidelines from state
 */
const clearGuideLines = () => Object.assign({}, initialState);

/**
 * Clear all guidelines from state
 */
const dropGuideLine = (state, action) => Object.assign({}, state, {
  // Need to force a re-render when dragging ends.
  dropped: action.payload.id
});

/**
 * Guidelines Reducer
 */
export default function guidelinesReducer (state = initialState, action) {
  switch (action.type) {
    case CLEAR_GUIDELINES: return clearGuideLines(state);
    case CREATE_GUIDELINE: return createGuideLine(state, action);
    case DELETE_GUIDELINE: return deleteGuideline(state, action);
    case DRAG_GUIDELINE: return dragGuideLine(state, action);
    case DROP_GUIDELINE: return dropGuideLine(state, action);
    default: return state;
  }
}
