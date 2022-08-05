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
        {isLoading && !error && <h4>Loading....</h4> }
        {error && !isLoading && <h4>{error}</h4> }

        {/* map method implimented  */}
        {
          countries?.map(country=>(
            <div className='country__card'>
              <div className='country__img'>
                <img src={country.flags.png} alt=''/>
              </div>

              <div className='country__data'>
                <h3>{country.name.common}</h3>
              </div>
            </div>
          ))
        }
     </div>

  </div>
  
}

export default AllCountries