import { SET_VETS, VETS_LOADING } from './types';

const InitialState = {
  vetList: {},
  loading: false
};

const vetsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SET_VETS:
      return {
        ...state,
        vetList: action.payload
      };
    case VETS_LOADING:
      return {
        ...state,
        loading: action.value
      };
    default:
      return state;
  }
};

export default vetsReducer;
