import { createStore, combineReducers } from 'redux';
import { reducers as RulersReducers } from 'components/rulers';

const reducers = combineReducers({
  rulers: RulersReducers
});

export default createStore(reducers);


