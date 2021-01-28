import { combineReducers } from 'redux';
import vetsReducer from './modules/vets/reducer';

const rootReducer = combineReducers({
  vets: vetsReducer
});

export default rootReducer;
