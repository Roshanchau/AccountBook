import {createContext, useReducer} from "react"

export const TableContext=createContext();

export const tableReducer=(state, action)=>{
    switch(action.type){
        case "SET_TABLE":
            return{
                table:action.payload
            };
        case "CREATE_TABLE":
            return{
                table:[action.payload, ...state.table]
            }
        default:
              return state;
    }
}

export const TableContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tableReducer, {
      table: null,
    }); 
  
    return (
      <TableContext.Provider value={{ ...state, dispatch }}>
        {children}
      </TableContext.Provider>
    );
  };