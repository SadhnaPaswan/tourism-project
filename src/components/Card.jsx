import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {
  const [readmore,setReadmore]=useState(false)
  const description=`${info.substring(0,200)}...`
  readmore ? info : `${info.substring(0,200)}...`
  function readmoreHandler(){
    setReadmore(!readmore)
  }
  return (
    <div className='card'>
      <img src={image} className='image'></img>
      <div className='tour-info'>
        <div className='tour-details'>
        <h4 className='toure-price'>{price}
        </ h4>
        <h4 className='toure-name'>{name}</h4>
      </div>
      <div className='description'onClick={readmoreHandler}>
        {readmore ? `show less`:`read more`}
        {description}
        <span className='read-more'></span>

      </div>
      </div>
      <button className='btn-red'onClick={()=>removeTour(id)}>Not interested</button>

    </div>
  )
}

export default Card