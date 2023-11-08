
import React from "react";
import { useCustomersContext } from "../hooks/useCustomersContext.";
import useAuthContext from "../hooks/useAuthcontext";

const CustomerDetails = ({customer}) => {
  const {dispatch}=useCustomersContext();
  const{user}=useAuthContext();
  return (
    <>
        <div
          className="
       bg-neutral-400 
      flex flex-col
      justify-center
      p-4
      "
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold
            ">Customer Name : </h1>
            <p className="p-2 ml-2">{customer.name}</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold
            ">Email : </h1>
            <p className="p-2 ml-2">{customer.email}</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-semibold
            ">Contact : </h1>
            <p className="p-2 ml-2">{customer.contact}</p>
          </div>
        </div>
      
    </>
  );
};

export default CustomerDetails;
