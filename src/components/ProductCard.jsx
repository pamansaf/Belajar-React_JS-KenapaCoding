import React from 'react'


const ProductCard = ({imgURL, title, desc}) => {
  const handleClick = (title) => {
    console.log ("saya mau beli " + title);
  }
  return (
    <div className='w-[230px] h-[300px] rounded-md shadow-lg'>
      <img src={imgURL} className='w-full h-[160px] rounded-t-md'/>
      <div className='flex flex-col gap-2 p-3'>
        <h2 className='text-sm font-bold'>{title}</h2>
        <p className='text-xs'>{desc}</p>
      </div>
      <div className='flex justify-end p-3'>
        <button onClick={() => handleClick(title)} className=' bg-blue-700 hover:bg-blue-800 text-white py-1 px-3 w-1/3 rounded-md text-sm'>Buy</button>
      </div>
      
    </div>
  )
}

export default ProductCard