import { createStore, combineReducers } from 'redux';
import { RulersReducers } from 'components/rulers';

const reducers = combineReducers({
  rulers: RulersReducers
});

export default createStore(reducers);


