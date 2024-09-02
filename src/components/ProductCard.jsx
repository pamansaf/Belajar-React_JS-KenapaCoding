import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-[230px] h-[250px] rounded-md shadow-lg'>
      <img src="https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="img Ford" className='w-full h-[150px] rounded-t-md'/>
      <div className='flex flex-col gap-2 p-3'>
        <h2 className='text-sm font-bold'>Mobil Ford</h2>
        <p className='text-xs'>Mobil Ford adalah mobil yang sangat bagus</p>
      </div>
    </div>
  )
}

export default ProductCard