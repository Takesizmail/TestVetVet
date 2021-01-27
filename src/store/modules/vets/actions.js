import { getVetsRequest } from './api';
import { SET_VETS, VETS_LOADING } from './types';

export const setVetsLoading = value => dispatch => {
  return dispatch({ type: VETS_LOADING, value });
};

export const setVets = payload => dispatch => {
  return dispatch({ type: SET_VETS, payload });
};

export const getVets = () => dispatch => {
  dispatch(setVetsLoading(true));

  return getVetsRequest()
    .then(res => {
      dispatch(setVets(res));
      dispatch(setVetsLoading(false));
    })
    .catch(error => {
      console.log(error);
      dispatch(setVetsLoading(false));
    });
};
