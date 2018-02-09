const contactActions = {
  TOGGLE_LOADING: 'SHUFFLE_TOGGLE_LOADING',

  toggleLoading: (loading) => ({
    type: contactActions.TOGGLE_LOADING,
    loading
  })
};
export default contactActions;
