import React,{useState} from 'react'
import { ImCross } from 'react-icons/im';
import { currentVisitor } from '../logic/getUser';
import axios from 'axios';
import PaymentGateway from './PaymentGateway';

const BuyWaste =({setBuyWaste}) => {
  const {visitor}=currentVisitor();
  const addItem=async()=>{
    
  }
  const [payment,setPayment]=useState(false);

  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[500px] h-[150px] bg-slate-300 rounded-md  '>
            <div className='flex flex-row justify-end px-5 pt-4'>
                <ImCross onClick={()=>setBuyWaste(false)}/>
            </div>
            <div className='px-10 pt-2 pb-5'>
                  
                  <select className='w-full px-5 py-2'>

                    <option value="10">10kg</option>
                    <option value="20">20kg</option>
                    <option value="30">30kg</option>
                    <option value="40">40kg</option>
                    <option value="50">50kg</option>

                  </select>
                  <button className='bg-primary rounded-sm text-white px-5 py-3 w-full my-3' onClick={()=>setPayment(true)}>Buy Current Amount</button>
            </div>
           

        </div>
        {payment && <PaymentGateway setPayment={setPayment}/>}
    </div>
  )
}

export default BuyWaste