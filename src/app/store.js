import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';

import { reducer as GuideLinesReducer } from 'components/guidelines';
import { reducer as ToolBarReducer } from 'components/toolbar';
import { reducer as PaletteReducer } from 'components/palettes';

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  guideLines: GuideLinesReducer,
  toolBar: ToolBarReducer,
  palette: PaletteReducer
});

const logger = createLogger({
  level: 'log',
  duration: false,
  timestamp: true,
  logErrors: true,
});

const middlewares = [thunk, logger];

export default compose(applyMiddleware(...middlewares))(createStore)(reducers);


