import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "./api.json";

const initialState = {
  topdata: "",
  name: "",
  btnText: "",
  image: "",
  services: []
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        topdata: "THIS IS THE",
        name: "LIGHT STUDIO",
        btnText: "Hire Us!",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        topdata: "THIS IS ME",
        name: "Sameer Bakshi",
        btnText: "Hire Me!",
        image: "./images/about1.svg",
      },
    });
  };

  const getServices = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      dispatch({type: "GET_SERVICES", payload: data})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
