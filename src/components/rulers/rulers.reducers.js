import {
  CREATE_RULER,
  DELETE_RULER
} from './rulers.actions';

const initialState = {
  rulers: []
};

const createRuler = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.concat(action.ruler)
});

const deleteRuler = (state, action) => Object.assign({}, state, {
  rulers: state.rulers.concat(action.ruler)
});

export default function rulersReducer (state = initialState, action) {
  switch (action.type) {
    case CREATE_RULER: return createRuler(state, action);
    case DELETE_RULER: return deleteRuler(state, action);
    default: return state;
  }
};
