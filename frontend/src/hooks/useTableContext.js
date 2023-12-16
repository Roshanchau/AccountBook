import {TableContext} from "../context/TableContext"
import { useContext } from "react"

const useTableContext=()=>{
  const context=useContext(TableContext);

  if(!context){
    throw Error(
      "no context"
    );
  }

  return context;
}

export default useTableContext;