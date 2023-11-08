import React from 'react'
import CustomerDetails from '../components/CustomerDetails'
import useAuthContext from  '../hooks/useAuthcontext'
import { useCustomersContext } from '../hooks/useCustomersContext.'
import { useEffect } from 'react'

const Home = () => {
const{customers , dispatch}=useCustomersContext();
const{shop}=useAuthContext();

useEffect(() => {
  const fetchCustomers=async () => {
    const response = await fetch("/api/customers" , {
      headers:{
          'Authorization': `Bearer ${shop.token}`
      }
    }); 
    const json = await response.json(); // we parse the workout response and get an array of workout objects.
    if (response.ok) {
      //after getting the response we fire the dispatch function which invokes the workoutsReducer function in the workoutContext.js and passes the passes in the action which is the (type:"same as below" , payload:is the json which is the whole response while fetching the data. )
      dispatch({ type: "SET_CUSTOMERS", payload: json });
    }
  };  

 if(shop){
  fetchCustomers()
 }
}, [dispatch , shop]);

  return (
    <>
      <div className='grid grid-cols-3 gap-6'>
        {
          customers&& customers.map((customer)=>(
            <CustomerDetails key={customer.id} customer={customer}/>
          ))
        }
      </div>
    </>
  )
}

export default Home 