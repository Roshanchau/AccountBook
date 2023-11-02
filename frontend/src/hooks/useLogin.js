
import { useState } from "react";
import useAuthContext from "./useAuthcontext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

    const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // don't forget to add the proxy in package.json to fetch from the endpoint 3000 where backend is running across from the api.
    const response = await fetch("/api/shop/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save the user to the local storage
      localStorage.setItem("shop", JSON.stringify(json));

      //update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};