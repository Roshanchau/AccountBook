import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    console.log("hello")
  };

  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <form className="w-[25%]" onSubmit={handleSubmit}>
        <div className="flex flex-col bg-slate-700 justify-center  px-10 py-7">
          <h3 className="m-5 text-3xl text-neutral-300">Are you Logged in?</h3>
          <div className="flex flex-col m-5">
            <label className="text-neutral-300 text-left mb-4 text-xl">
              Email :
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col  justify-center m-5">
            <label className="text-neutral-300 mb-4 text-xl">Password :</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {/* //log in button is disabled if we are writing the email/password */}
          <div className="flex items-center justify-center">
            <button disabled={isLoading} className="text-neutral-300 bg-neutral-900 px-7 py-3 rounded-md ">
              Log in
            </button>
            {error && <div >{error}</div>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
