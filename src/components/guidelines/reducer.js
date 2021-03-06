import * as ACTIONS from './constants';

const initialState = {
  guidelines: []
};

/**
 * Update an existing guideline's state while dragging
 */
const dragGuideLine = (state, action) => Object.assign({}, state, (() => {
  const { guidelines } = state;
  const { id, location } = action.payload;
  const orientation = guidelines.find(guide => guide.id === id).orientation;

  return {
    guidelines: guidelines
    .filter(guide => guide.id !== id)
    .concat({ id, location, orientation })
  };
})());

/**
 * Add a new guideline to state
 */
const createGuideLine = (state, action) => Object.assign({}, state, {
  guidelines: state.guidelines.concat({
    id: action.payload.id,
    location: action.payload.location,
    orientation: action.payload.orientation,
  })
});

/**
 * Delete guideline from state.
 */
const deleteGuideline = (state, action) => Object.assign({}, state, {
  guidelines: state.guidelines.filter(guideline => guideline.id !== action.payload.id)
});

/**
 * Clear all guidelines from state
 */
const clearGuideLines = () => Object.assign({}, initialState);

/**
 * Guidelines Reducer
 */
export default function guidelinesReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CLEAR_GUIDELINES: return clearGuideLines(state);
    case ACTIONS.CREATE_GUIDELINE: return createGuideLine(state, action);
    case ACTIONS.DELETE_GUIDELINE: return deleteGuideline(state, action);
    case ACTIONS.DRAG_GUIDELINE: return dragGuideLine(state, action);
    default: return state;
  }
}
