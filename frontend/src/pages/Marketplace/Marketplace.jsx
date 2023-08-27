import React,{useState,useEffect} from 'react';
import Product from './Product';
import axios from 'axios';
import "./style.scss";
import ContentWrapper from "./../../components/contentwrapper/ContentWrapper";

const Marketplace = () => {
  const array=[1,2,3,4,5,6,7,8]
  const [products,setProducts]=useState();

  useEffect(()=>{
    const loadContents=async()=>{
     try{
      const getArray=await axios.get('http://localhost:8080/marketplace/products',{withCredentials:true});
      console.log("",getArray.data.data);
      setProducts(getArray.data.data);
     }
     catch(err){
       console.log(err);}
     }
    loadContents();
 },[])

  return (
    <ContentWrapper>
    <div className="market">

      <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>

       {products?.map((obj,id)=>(
         <Product description={obj.description} image={obj.image} key={id}/>
       ))}

      </div>
      {/* <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>

       {array.map((obj,id)=>(
         <Product/>
       ))}

      </div> */}

    </div>
    </ContentWrapper>
  )
}

export default Marketplace