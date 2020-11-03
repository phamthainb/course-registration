var initState = {
  loading: false,
  user: {},
  isLogin: false
};

var appReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.payload };
    case "GET_USER":
      return {...state, user: action.payload};
    case "CHECK_LOGIN": 
      return {...state, isLogin: action.payload}
    default:
      return {...state};
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

export const checkLogin = (payload) => ({
  type: "CHECK_LOGIN",
  payload
})
