import React from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import "./style.scss";
import axios from 'axios';
import Product from "../../Marketplace/Product";

const RecycledProduct = () => {
  const array=[1,2,3,4,5,6,7]
  return (
    <div className="recycled-product">
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="title">
          <span>Recycled</span> Products
        </div>
        <div className="products">
            <div className='py-10 flex overflow-x-auto space-x-8 w-full  overflow-y-visible'>
              {
                array.map((obj,id)=>(
                  <Product description="Image of the Product Image"  key={id}/>
                ))
              }
            </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default RecycledProduct;
