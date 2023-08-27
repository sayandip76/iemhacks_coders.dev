import React,{useState,useContext,createContext,useEffect} from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const Data=createContext();

const CheckVisitor= ({children}) => {
   
   const [visitor,setVisitor]=useState();
   const { isLoading, isAuthenticated, error, user, getAccessTokenSilently,loginWithRedirect, loginWithPopup,logout } =
   useAuth0();



   useEffect(()=>{
    
        const loadContents=async()=>{
            console.log(user,isAuthenticated)
            if(user && isAuthenticated){
               const authUser=await axios.post('http://localhost:8080/authorize',user,{ withCredentials: true })
               console.log(authUser);
               setVisitor(authUser.data.data);
            }
            else{
               setVisitor(null);
            }
        } 
        loadContents();

  },[user])

   const value={visitor,setVisitor}

   return(
     <Data.Provider value={value}>
        {children}
     </Data.Provider>
   )
}

export default CheckVisitor

export const currentVisitor=()=>{
   return useContext(Data);
}