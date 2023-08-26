import React, { useEffect, useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import BuyWaste from '../../PopupEvents/BuyWaste';
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { currentVisitor } from '../../logic/getUser';
import { useAuth0 } from '@auth0/auth0-react';

const StoreWaste = ({model,id,content}) => {
  const [buyWaste,setBuyWaste]=useState(false);
  const {visitor}=currentVisitor();
  const { isLoading, isAuthenticated, error, user, getAccessTokenSilently,loginWithRedirect, loginWithPopup,logout } =
  useAuth0();
  
  return (
    
    <div className=' rounded-md p-5 w-[250px] h-[200px] m-5 group  transition-al duration-300 ease-in-out item' key={id}>
      <div className='group-hover:opacity-0 transition-all h-full duration-300 ease-in-out item_hover'>
          <div className='h-3/4 flex flex-row justify-center items-center '>
              <Canvas>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={8}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,50]}/>
                    {model}
              </Canvas>
          </div>
          <div className='border-2 border-primary h-1/4 text- font-mons text-xl flex flex-row items-center justify-center '>
              {content.wasteType}
          </div>
      </div>
      <div className='group-hover:opacity-100 opacity-0 transition-all relative -translate-y-36 text-center  text-xl duration-300 ease-in-out'>

              <p><b className='text-primary'>{content.amountPresent}kg</b></p>
              <label className=' font-mons'>Amount Received</label>
              <p><b className='text-primary '>{content.amountRecycled}kg</b></p>
              <label className=' font-mons'>Amount Sold</label>
       
              {user?.given_name && (
               visitor?.visitorDesig=="Collector"?
                <button className='w-full rounded-md px-2 py-2 font-mons text-white bg-primary my-5' onClick={()=>setBuyWaste(true)}>Sell Waste</button>: 
                <button className='w-full rounded-md px-2 py-2 font-mons text-white bg-primary my-5' onClick={()=>setBuyWaste(true)}>Buy Now</button>
              )}
      </div>
      {buyWaste && <BuyWaste setBuyWaste={setBuyWaste}/>}
    </div>
  )
}

export default StoreWaste
{/* <div className='w-[200px] h-[200px] p-5  group  border-2 border-solid  shadow-md bg-slate-300 transition-all  my-5'>
          <div className='h-full flex flex-col justify-center items-center group-hover:opacity-0 transition-all'>
              <FaBeer className='text-5xl '/>
              <p className='font-mons text-xl my-5'>{text}</p>
          </div>
          <div className='h-full opacity-0 group-hover:opacity-100 relative -translate-y-36 text-center grid grid-cols-1 gap-1 transition-all'>
              <p><b className='text-primary'>230kg</b></p>
              <label className='font-preah'>Amount Received</label>
              <p><b className='text-primary'>13kg</b></p>
              <label className='font-preah'>Amount Sold</label>
              <button className='w-full rounded-sm px-2 py-1 font-mons text-white bg-primary' onClick={()=>setBuyWaste(true)}>Buy Now</button>
          </div>
  {buyWaste && <BuyWaste setBuyWaste={setBuyWaste}/>}
    </div> */}