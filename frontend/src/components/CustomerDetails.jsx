
import React from "react";
import { useCustomersContext } from "../hooks/useCustomersContext.";
import useAuthContext from "../hooks/useAuthcontext";
import {AiOutlineDelete} from "react-icons/ai";

const CustomerDetails = ({customer}) => {
  const {dispatch}=useCustomersContext();
  const{shop}=useAuthContext();


  const handleDelete= async()=>{
    if(!shop){
      return;
    }
    const response= await fetch("/api/customers/"+customer._id ,{
      method:"DELETE",
      headers:{
        'Authorization':`Bearer ${shop.token}`,
      },
    });

    const json=await response.json();

    if(response.ok){
      dispatch({type: "DELETE_CUSTOMERS" , payload : json})
    }
  }
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
            <AiOutlineDelete className="text-2xl text-red-700" onClick={handleDelete}/>
          </div>
        </div>
      
    </>
  );
};

export default CustomerDetails;
