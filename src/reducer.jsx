export const reducer = (state, action) => {
  if (action.type === "HOME_UPDATE") {
    return {
      ...state,
      topdata: action.payload.topdata,
      name: action.payload.name,
      btnText: action.payload.btnText,
      image: action.payload.image,
    };
  }

  if (action.type === "ABOUT_UPDATE") {
    return {
      ...state,
      topdata: action.payload.topdata,
      name: action.payload.name,
      btnText: action.payload.btnText,
      image: action.payload.image,
    };
  }

  if (action.type === "GET_SERVICES") {
    return {
      ...state,
      services: action.payload,
    };
  }

  return state;
};

export default reducer;
