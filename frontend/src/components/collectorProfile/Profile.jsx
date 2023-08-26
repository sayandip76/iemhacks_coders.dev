import React, { useState,useEffect } from 'react'
import { currentVisitor } from '../../logic/getUser'
import axios from 'axios'
import Product from '../../pages/Marketplace/Product';

const Profile = () => {
  const {visitor}=currentVisitor();
  const [collector,setCollector]=useState();

  useEffect(()=>{
    const loadContents=async()=>{
        console.log(visitor)
        const getVisitor=await axios.put("http://localhost:8080/collector/myCollector",{id:visitor._id},{withCredentials:true});
        setCollector(getVisitor.data.data);
    }
    loadContents();
    },[visitor])
   const array=[1,2,3,4,5,6,7]

  return (
  <div className='secondary-container py-40'>
     <section className='py-10'>
          <div className='h-[150px]  rounded-md p-5 flex flex-row  items-center hover:shadow-md bg-white'>
             <div className=''>
                <img src="" alt="profile-image" className='w-28 h-28 rounded-full border-2 border-primary'/>
             </div>
             <div className='ml-10 gap-2 grid grid-cols-1 font-mons'>
                <p className='text-3xl '>Kaushan Dutta</p>
                <p>kaushandutta5@gmail.com</p>
                <p>Sarangabad,Budge Budge, Kolkata 700137</p>
                <button className='bg-primary rounded-3xl p-1 text-sm w-48'>Wallet: {"0x972s"+".."+"w0ww0s"}</button>
             </div>
          </div>
     </section>
     <section className=''>
        <p className='text-center py-10 text-3xl font-preah'>Products Bought</p>
        <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>
          {
            array.map((obj,id)=>(
              <Product description="Image of the Product Image"  key={id}/>
            ))
          }
        </div>
     </section>
  </div>
  )
}

export default Profile
