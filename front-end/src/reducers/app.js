var initState = {
  loading: false,
};

var appReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return [];
  }
};

export default appReducer;

// actions app
export const changeLoading = (payload) => ({
  type: "LOADING",
  payload: payload,
});
