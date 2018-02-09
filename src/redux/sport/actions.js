const sportActions = {
  TOGGLE_LOADING: 'SPORT_TOGGLE_LOADING',

  toggleLoading: (loading) => ({
    type: sportActions.TOGGLE_LOADING,
    loading
  })
};
export default sportActions;
