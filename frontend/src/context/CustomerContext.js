import { createContext, useReducer } from "react";

export const CustomersContext = createContext();


export const customersReducer = (state, action) => {
  switch (action.type) {
    case "SET_CUSTOMERS":
      return {
        customers: action.payload,
      };
    case "CREATE_CUSTOMERS":
      return {
        customers: [action.payload, ...state.customers],
      };

    case "DELETE_CUSTOMERS":
      return {
        customers: state.customers.filter((w) => w._id !== action.payload._id),
      };

    default:
      return state;
  }
};

export const CustomersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customersReducer,{
    customers: null,
  });   //customersReducer is a function  which sets the customers state which is null initally.

  //   the disptach function has an object as an arguement where the type is set which show what the state change we want to make and the second payload property represents any data we need to make the change.
  //   dispatch({type:"SET_customers" , payload:[{} , {}]}) //when we call the dispatch function the workuotsReducer function is invoked.

  return (

    <CustomersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CustomersContext.Provider>
  );}