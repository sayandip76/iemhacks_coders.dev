import React from 'react'
import { ImCross } from 'react-icons/im';
import Polygon from '../assets/polygon.png';
import Razorpay from '../assets/razorpay.jpeg';

const PaymentGateway = ({setPayment}) => {
  return (
    <div className='w-screen h-screen  fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[30vw] h-[40vh] bg-slate-300 rounded-md p-10'>
            <div className='flex flex-row justify-end'>
                <ImCross onClick={()=>setPayment(false)}/>
            </div>
            <div className='my-5 text-lg font-mons flex flex-col gap-5'>
                <button className='w-full flex flex-row text-left p-2 items-center bg-white rounded-md '>
                  <img src={Polygon} className='w-10  '/><p className='mx-5'>Polygon</p>
                </button>
                <button className='w-full flex flex-row text-left p-2 items-center bg-white rounded-md '>
                  <img src={Razorpay} className='w-10  '/><p className='mx-5'>Razorpay</p>
                </button>
             </div>
        </div>
    </div>
  )
}

export default PaymentGateway