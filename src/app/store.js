import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose
} from 'redux';

import { reducers as RulersReducers } from 'components/rulers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  rulers: RulersReducers
});

const logger = createLogger({
  level: 'log',
  duration: false,
  timestamp: true,
  logErrors: true
});

const middlewares = [thunk, logger];

export default compose(applyMiddleware(...middlewares))(createStore)(reducers);


