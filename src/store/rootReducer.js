import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import vetsReducer from './modules/vets/reducer';

const rootReducer = combineReducers({
  vets: vetsReducer,
  form: formReducer
});

export default rootReducer;
