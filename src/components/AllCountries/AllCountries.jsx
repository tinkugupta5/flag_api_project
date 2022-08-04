import React, { useState,useEffect } from 'react'
import { apiURL } from '../util/api'

const AllCountries = () => {

    // define state 

    const [countries,setCountries] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState('')

    // api value  extraction machine

    const getAllCountries = async() => {
        try {

            const res = await fetch(`${apiURL}/all`)

        } catch(error) {

        }
    }





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