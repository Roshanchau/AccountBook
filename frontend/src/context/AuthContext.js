import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        shop: action.payload,
      };

    case "LOGOUT":
      return { shop: null };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    shop: null,
  });

  useEffect(() => {
    const shop= JSON.parse(localStorage.getItem("shop"));

    if (shop) {
      dispatch({ type: "LOGIN", payload: shop});
    }
  }, []);

  console.log("AuthContext state:", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};