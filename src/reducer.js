import { combineReducers } from 'redux';
import reducer from './reducers/reducer';

const rootReducer = combineReducers({
    user: reducer,
});

function indexReducer(state, action) {
  return rootReducer(state, action);
}

export default indexReducer;
