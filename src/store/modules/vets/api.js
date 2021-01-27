import request from '../../request';

export const getVetsRequest = () => {
  return request.get('practices');
};
