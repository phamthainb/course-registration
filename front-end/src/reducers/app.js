var initState = {
  loading: false,
  user: {}
};

var appReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "GET_USER":
      return {...state, user: action.payload};
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

export const getUser = (payload) => ({
  type: "GET_USER",
  payload
})
