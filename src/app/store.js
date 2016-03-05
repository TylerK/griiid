import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose
} from 'redux';

import { reducers as GuideLinesReducers } from 'components/guidelines';

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  guideLines: GuideLinesReducers
});

const logger = createLogger({
  level: 'log',
  duration: false,
  timestamp: true,
  logErrors: true
});

const middlewares = [thunk, logger];

export default compose(applyMiddleware(...middlewares))(createStore)(reducers);


