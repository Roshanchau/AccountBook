
import useAuthContext from "./useAuthcontext";
import { useCustomersContext } from "./useCustomersContext.";


export const useLogout=()=>{
    const {dispatch}=useAuthContext();
    const{dispatch: customersDispatch}=useCustomersContext();

    const logout=()=>{
        //remove the user from the local storage
        localStorage.removeItem("shop");

        //dispatch logout action.
        dispatch({type:"LOGOUT"});
        customersDispatch({type: "SET_CUSTOMERS" , payload: null})
    }

    return {logout};
}

