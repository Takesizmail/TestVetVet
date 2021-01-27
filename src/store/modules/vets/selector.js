const getVets = state => state.vets?.vetList?.practices;
const getLoading = state => state.loading;

export default {
  getVets,
  getLoading
};
