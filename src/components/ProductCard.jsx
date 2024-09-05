import React from 'react'


const ProductCard = ({imgURL, title, desc}) => {
  return (
    <div className='w-[230px] h-[250px] rounded-md shadow-lg'>
      <img src={imgURL} className='w-full h-[160px] rounded-t-md'/>
      <div className='flex flex-col gap-2 p-3'>
        <h2 className='text-sm font-bold'>{title}</h2>
        <p className='text-xs'>{desc}</p>
      </div>
    </div>
  )
}

export default ProductCard