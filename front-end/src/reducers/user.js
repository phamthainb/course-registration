var initState = {};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_USER":
            state = action.payload
            return { ...state };
        default:
            return [];
    }
}

export const getUser = (payload) => ({
    type: "GET_USER",
    payload
})  

export default userReducer;