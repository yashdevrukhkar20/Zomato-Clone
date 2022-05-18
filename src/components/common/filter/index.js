import React from 'react'
import './filter.css'
import Filteritem from './filteritem';

const index = ({filterList}) => {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter)=>{
          return <Filteritem filter={filter} key={filter.id}/>
      })}
    </div>
  )
}

export default index
