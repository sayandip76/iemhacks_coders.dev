import React, { useState,useCallback } from 'react'
import { ImCross } from 'react-icons/im';
import { currentVisitor } from '../logic/getUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import storage from '../Appwrite/appwrite.config';
import {v4 as uuidv4} from 'uuid';
import {useDropzone} from 'react-dropzone';

const Collector=()=>{
    const {visitor}=currentVisitor();

    const [collector,setCollector]=useState({_id:visitor._id,collectorName:"",collectorAddress:"",walletAddress:""});  
    async function createCollector(e){
       e.preventDefault();
       console.log(collector)
       const create=await axios.post('http://localhost:8080/collector/createProfile',collector,{ withCredentials: true });
       console.log(create);
       window.location.reload();
    }
    return(
        <div className=''>
            <input type="text" placeholder='Enter Your Username'className='w-full px-5 py-2 rounded-md my-3' onChange={(e)=>setCollector({...collector,["collectorName"]:e.target.value})}/>
            <input type="text" placeholder='Enter Your Address'className='w-full px-5 py-2 rounded-md my-3' onChange={(e)=>setCollector({...collector,["collectorAddress"]:e.target.value})}/>
            <input type="text" placeholder='Enter Your Wallet Address'className='w-full px-5 py-2 rounded-md my-3' onChange={(e)=>setCollector({...collector,["walletAddress"]:e.target.value})}/>
            <button className='bg-primary rounded-md px-5 py-2 text-white ' onClick={createCollector}>Create Profile</button>
        </div>
    )
}
const Community=()=>{
    const {visitor}=currentVisitor();
    const [profileImage,setProfileImge]=useState();

    const [community,setCommunity]=useState({_id:visitor._id,communityName:"",description:"",latitude:0,longitude:0,image:''});  
    
    async function createCommunity(e){
       e.preventDefault();
       console.log(community);

       const promise = await storage.createFile('64d7a62faef4f19b4ed7', uuidv4(), profileImage);
        
       console.log(promise);
       const getFile = await storage.getFilePreview('64d7a62faef4f19b4ed7', promise.$id);
       console.log(getFile);
       const create=await axios.post('http://localhost:8080/community/createCommunity',{_id:community._id,communityName:community.communityName,description:community.description,latitude:community.latitude,longitude:community.longitude,image:getFile.href},{ withCredentials: true });
       console.log(create);
       window.location.reload();

    } 
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0]);
        setProfileImge(acceptedFiles[0]);

      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return(
        <>
            <input type="text" className='w-full px-5 py-2 rounded-md' placeholder='Enter the name of community' onChange={(e)=>setCommunity({...community,["communityName"]:e.target.value})}/>
            <textarea  placeholder='Enter the description' className='w-full px-5 py-2 rounded-md my-3' onChange={(e)=>setCommunity({...community,["description"]:e.target.value})}/>
            <label><b>Enter your community location:</b></label>
            <div className='flex flex-row justify- my-3'>
            <input type="number" className='w-1/2 mr-3 px-5 py-2 rounded-md ' placeholder='Latitude'  onChange={(e)=>setCommunity({...community,["latitude"]:e.target.value})}/>
            <input type="number" placeholder='Longitude' className='w-1/2 ml-3 px-5 py-2 rounded-md '  onChange={(e)=>setCommunity({...community,["longitude"]:e.target.value})}/>
            </div>
            <div className='my-3'{...getRootProps()}>
                    <input {...getInputProps()}/>
                    <button className='border-2 border-primary text-slate-700 rounded-sm px-5 py-1 '><p className='font-mons'><b>{profileImage?"Image Uploaded":"Upload the image"}</b></p></button>
            </div>
            <button className='bg-primary rounded-md px-5 py-2 text-white ' onClick={createCommunity}>Create Profile</button>

        </>
    )
}
const Manager=()=>{
    return(
        <>
        
        </>
    )
}

const CreateProfile = ({setCreateProfile}) => {

   
 
  const changeVisitor=(e)=>{
        e.preventDefault();
        const res=document.getElementById('visitors').value;
        if(res=="collector"){setVistor(<Collector/>)}
        else if(res=="community"){setVistor(<Community/>)}
        else{ setVistor(<Manager/>)}
  }



  const [currentVistor,setVistor]=useState(<Collector/>);
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[60vw] h-[60vh] bg-slate-300 rounded-md p-10'>
            <div className='flex flex-row justify-end'>
                <ImCross onClick={()=>setCreateProfile(false)}/>
            </div>
            <div className=''>
                <label><b>Select your identity:</b></label>
                <select id="visitors" onChange={changeVisitor} className='w-full my-3 py-2 px-5 font-mono text-lg rounded-md '>
                    <option value="collector">Waste Collector</option>
                    <option value="community">Community</option>
                    <option value="manager">Manager</option>
                </select>
            </div>
            <div className=''>
                {currentVistor}
            </div>

        </div>
    </div>
  )
}

export default CreateProfile