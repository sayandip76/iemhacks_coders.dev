import React,{useEffect,useState} from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import "./style.scss";
import axios from 'axios';
import Product from "../../Marketplace/Product";

const RecycledProduct = () => {
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
    <div className="recycled-product">
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="title">
          <span>Recycled</span> Products
        </div>
        <div className="products">
            <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>
            {products?.map((obj,id)=>(
              <Product description={obj.description} image={obj.image} key={id}/>
            ))}
            </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RecycledProduct;
