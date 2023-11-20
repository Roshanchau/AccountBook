import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthcontext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { shop } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div
        className="flex flex-row items-center justify-between
            p-4
        "
      >
        <div className="mx-3">Khaata App</div>
        <div className="flex flex-row">
          <ul
            className="flex flex-row
                        items-center justify-center
                       
                    "
          >
            <li className="mx-3">
              <Link to="/">Home</Link>
            </li>
            {shop && (
              <div className="flex flex-row gap-3">
                <span>{shop.email}</span>
                <button
                  className="bg-neutral-700 text-white
               p-2 rounded-md
               "
                  onClick={handleLogout}
                >
                  Log out
                </button>
              </div>
            )}
            {!shop && (
              <div className="flex flex-row">
                <li className="mx-3">
                  <Link to="/login">Login</Link>
                </li>
                <li className="mx-3">
                  <Link to="/signup">Signup</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
