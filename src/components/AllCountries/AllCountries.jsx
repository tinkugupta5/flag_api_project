import React, { useState,useEffect } from 'react'
import { apiURL } from '../util/api'

const AllCountries = () => {

    // define state 

    const [countries,setCountries] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');

    // api value  extraction machine of countries data

    const getAllCountries = async () => {

        try {
          const res = await fetch(`${apiURL}/all`);
    
          if (!res.ok) throw new Error("Something went wrong!");
    
          const data = await res.json();
    
          console.log(data);
    
          setCountries(data);
    
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setError(error.message);
        }
      };


    // step second use effect 

        useEffect(()=>{
            getAllCountries();
        },[]);




  return <div className="all__country_wrapper">

    {/* top country */}

     <div className="country__top">

     </div>
     
     {/* bottom country */}

     <div className="country__bottom">

     </div>

  </div>
  
}

export default AllCountries