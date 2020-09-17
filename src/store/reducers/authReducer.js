const initState = {
  authERROR: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR");
      return { ...state, authERROR: "Login Failed" };
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return { ...state, authERROR: null };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS ");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS ");
      return { ...state, authERROR: null };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR ");
      return { ...state, authERROR: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
