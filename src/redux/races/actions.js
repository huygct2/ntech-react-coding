const raceActions = {
  TOGGLE_LOADING: 'RACES_TOGGLE_LOADING',

  toggleLoading: (loading) => ({
    type: raceActions.TOGGLE_LOADING,
    loading
  })
};
export default raceActions;
