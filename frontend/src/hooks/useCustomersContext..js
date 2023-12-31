import { CustomersContext } from "../context/CustomerContext";
import { useContext } from "react";

//everytime we need to get the workouts data we can invoke the useWorkoutsContext hook 
export const useCustomersContext = () => {
  const context = useContext(CustomersContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextprovider"
    );
  }

  return context;
};
 