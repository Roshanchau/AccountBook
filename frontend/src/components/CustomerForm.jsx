import React, { useState } from "react";
import useAuthContext from "../hooks/useAuthcontext";
import { useCustomersContext } from "../hooks/useCustomersContext.";

const CustomerForm = () => {
  const { shop } = useAuthContext();
  const { dispatch } = useCustomersContext();

  const [customer, setcustomer] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (customerKey, newValue) => {
    setcustomer({ ...customer, [customerKey]: newValue });
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!shop) {
      return;
    }
    const response = await fetch("/api/customers/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${shop.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setcustomer({
        name: "",
        email: "",
        contact: "",
      });
      setError(null);
      dispatch({ type: "CREATE_CUSTOMERS", payload: json });
    }
  };

  return (
    <>
      <form>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row">
            <label htmlFor="name">Name :</label>
            <input
            className="border-2 border-gray-600 rounded-md ml-3"
              type="text"
              value={customer.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="flex flex-row mt-2">
            <label htmlFor="email">Email :</label>
            <input
            className="border-2 border-gray-600 rounded-md ml-3"
              type="email"
              value={customer.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          <div className="flex flex-row mt-2">
            <label htmlFor="contact">Contact :</label>
            <input
            className="border-2 border-gray-600 rounded-md ml-3"
              type="number"
              value={customer.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
            />
          </div>

          <button
            className="rounded-md bg-green-500 p-2 mt-2"
            onClick={handleCreate}
          >
            Add customer
          </button>
          {error && <div className="">{error}</div>}
        </div>
      </form>
    </>
  );
};

export default CustomerForm;
