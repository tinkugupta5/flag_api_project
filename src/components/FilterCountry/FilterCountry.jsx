import React from 'react'

const FilterCountry = ({onSelect}) => {

// 2.
    const selectHandler = e => {

        const regionName = e.target.value
    }


// 1
  return <select name='' id='' onChange={selectHandler}>
    <option > Filter By Region</option>
    <option value="Africa">Africa</option>
    <option value="America">America</option>
    <option value="Asia">Asia</option>
    <option value="Europ">Europ</option>
    <option value="America">America</option>
    <option value="Oceania">Asia</option>
  </select>
}

export default FilterCountry
