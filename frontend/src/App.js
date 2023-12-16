import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthcontext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import { TableContextProvider } from "./context/TableContext";
const App = () => {
  const { shop } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={shop ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!shop ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!shop ? <SignUp /> : <Navigate to="/" />}
          />

          <Route
            path="/details/:id"
            element={
              shop ? (
                    <TableContextProvider>
                      <Details />
                    </TableContextProvider>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
