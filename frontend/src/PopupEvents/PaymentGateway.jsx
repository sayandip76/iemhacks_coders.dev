import React from 'react'
import { ImCross } from 'react-icons/im';
import Polygon from '../assets/polygon.png';
import Razorpay from '../assets/razorpay.jpeg';
import { ethers } from 'ethers';
import axios from 'axios';
import { getConnection } from '../logic/connectWallet';
import {loadStripe} from "@stripe/stripe-js"


const PaymentGateway = ({setPayment,wasteId,wasteAmount}) => {
  const {account,setAccount,chain,setChain,contract,setContract,provider,setProvider}=getConnection();
  const makePaymentCrypto=async(e)=>{
      e.preventDefault();
      if(account){
         makePayment();
      }
      else{
        const accounts=await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
        setAccount(accounts[0]);
        setProvider(window.ethereum);
      }
  }
  const makePayment=async()=>{
    try{
      const payment=await loadStripe('pk_test_51N96toSB22CAWVNpjebfr4dOasUqm8DPqI4UMxFBDyU5MAXNAU72cABNTBCewouLgCsKarmOknr4Ia06on3sYn3N00pkWDRv3W');
      await payment.redirectToCheckout({
         mode:'payment',
         lineItems:[{price:"price_1NjRoPSB22CAWVNp6be0qhbA",quantity:1}],
         successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
         cancelUrl:`${window.location.origin}`        
      })
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              unit_amount: 500,
              product_data: {
                name: "name of the product",
              },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "http://example.com/success",
        cancel_url: "http://example.com/",
      });
     }
     catch(err){
         console.log(err);
     }
  }
  return (
    <div className='w-screen h-screen  fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[30vw] h-[40vh] bg-slate-300 rounded-md p-10'>
            <div className='flex flex-row justify-end'>
                <ImCross onClick={()=>setPayment(false)}/>
            </div>
            <div className='my-5 text-lg font-mons flex flex-col gap-5'>
                <button className='w-full flex flex-row text-left p-2 items-center bg-white rounded-md ' onClick={makePaymentCrypto}>
                  <img src={Polygon} className='w-10  '/><p className='mx-5'>Polygon</p>
                </button>
                <button className='w-full flex flex-row text-left p-2 items-center bg-white rounded-md ' onClick={makePayment}>
                  <img src={Razorpay} className='w-10  '/><p className='mx-5'>Razorpay</p>
                </button>
             </div>
        </div>
    </div>
  )
}

export default PaymentGateway