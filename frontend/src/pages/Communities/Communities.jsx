import React,{useEffect,useState} from "react";
import ContentWrapper from "../../components/contentwrapper/ContentWrapper";
import data from "./data";
import Searchbar from "../../components/searchBar/Searchbar";
import "./style.scss";
import axios from 'axios';


const Communities = () => {
  const [communities,setCommunities]=useState();

  useEffect(()=>{
    const loadContents=async()=>{
     try{
      const getArray=await axios.get('http://localhost:8080/community/communities',{withCredentials:true});
      console.log(getArray.data.data[0]);
      setCommunities(getArray.data.data);
     }
     catch(err){
       console.log(err);}
     }
    loadContents();
 },[])
  return (
    <div className="Communities">
      
      <ContentWrapper>
        <div className="comm-items">
          <Searchbar element={"communities"}/>
          {/*<h1 className="commPage-title">Communities</h1>*/}
          {communities?.map((item) => {
            return (
              <div key={item.id} className="comm-item">
                <div className="comm-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="contents">
                  <div className="title">{item.communityName}</div>
                  <div className="subtitle">{item.description}</div>
                 {/*  <div className="works">
                    {item.works.map((mat,index)=>{
                      return(
                        <span key={index} className="material">{mat}</span>
                      )
                    })}
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Communities;