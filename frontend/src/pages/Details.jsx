import React, { useEffect } from "react";
import useAuthContext from "../hooks/useAuthcontext";
import useTableContext from "../hooks/useTableContext";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { shop } = useAuthContext();
  const { table, dispatch } = useTableContext();

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch("/api/table/" + id, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json)

      if (response.ok) {
        dispatch({ type: "SET_TABLE", payload: json });
      }
    };
    if (shop) {
      fetchDetails();
    }
  }, [dispatch, shop, id]);

  return (
    <>
       {table && table.length > 0 ? (
        <div>
          <ul>
            <li>{table[0].items}</li>
            <li>{table[0].price}</li>
            <li>{table[0].remarks}</li>
            <li>{table[0].serialnumber}</li>
            <li>{table[0].monthkey}</li>
            <li>{table[0].date}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Details;
