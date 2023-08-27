import React, { useState } from 'react'
import Glass from '../../assets/glass.jpg';


const Product = ({description, image, key}) => {
  const [state,setState]=useState(true);
  return (
    <div className='bg-slate-200 p-5 rounded-md shadow- w-[350px] h-[350px] flex-shrink-0 '>
        <div className='h-1/2 flex flex-row justify-center'>
            <img src={image} className='w-full' alt='Product Item'/>
        </div>
        <div className='text-left font-preah mt-5 grid grid-cols-1 gap-1 h-1/2'>
            
            <p>{description}</p>
            <div className='flex flex-row justify-between items-center -translate-y-3 relative'>
                <button className={`cursor-pointer text-white bg-primary p-2 rounded-md disabled:opacity-5 ${!state && `disabled`}`}>Buy Now</button>
                <p className='text-lg'>0.5 ETH/Rs 182</p>
            </div>
        </div>
    </div>
  )
}

export default Product