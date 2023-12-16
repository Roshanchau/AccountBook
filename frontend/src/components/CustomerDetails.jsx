import React, { useState , useEffect } from "react";
import { useCustomersContext } from "../hooks/useCustomersContext.";
import useAuthContext from "../hooks/useAuthcontext";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const CustomerDetails = ({ customer }) => {
  const { dispatch } = useCustomersContext();
  const { shop } = useAuthContext();

  const [show, setShow] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const showEdit = async () => {
    setShow(true);
  };

  const handleDelete = async () => {
    if (!shop) {
      return;
    }
    const response = await fetch("/api/customers/" + customer._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${shop.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CUSTOMERS", payload: json });
    }
  };

  useEffect(() => {
    setSelectedCustomer(customer);
  }, [customer]);

  const handleChange = (customerKey, newValue) => {
    setSelectedCustomer({ ...selectedCustomer, [customerKey]: newValue });
  };

  const handleUpdate = async (e) => {
    console.log(selectedCustomer);
    if (!shop) {
      return;
    }
    const response = await fetch("/api/customers/" + customer._id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${shop.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedCustomer),
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CUSTOMERS", payload: json });
    }
  };


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
          <h1
            className="text-2xl font-semibold
            "
          >
            Customer Name :{" "}
          </h1>
          <p className="p-2 ml-2">{customer.name}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="text-2xl font-semibold
            "
          >
            Email :{" "}
          </h1>
          <p className="p-2 ml-2">{customer.email}</p>
        </div>
        <div className="flex flex-col justify-center">
          <h1
            className="text-2xl font-semibold
            "
          >
            Contact :{" "}
          </h1>
          <p className="p-2 ml-2">{customer.contact}</p>
          <div className="flex justify-end">
            <AiOutlineDelete
              className="text-2xl text-red-700"
              onClick={handleDelete} 
            />
            <BiSolidEdit className="text-2xl ml-3" onClick={showEdit} />
            <Link to={`/details/${customer._id}`}>
            <button className="bg-neutral-800 text-neutral-100 px-3 py-1 rounded-md ml-2">Details</button>
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={selectedCustomer.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={selectedCustomer.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            value={selectedCustomer.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
         <button className="bg-green-400" type="submit">
         Update
       </button>
        </form>
         
      )}
      
    </>
  );
};

export default CustomerDetails;
