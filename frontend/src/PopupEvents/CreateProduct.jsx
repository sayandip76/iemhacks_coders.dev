import React,{useState,useCallback} from 'react'
import { ImCross } from 'react-icons/im';
import { currentVisitor } from '../logic/getUser';
import axios from 'axios';
import storage from '../Appwrite/appwrite.config';
import {v4 as uuidv4} from 'uuid';
import {useDropzone} from 'react-dropzone';


const CreateProduct = ({setCreateProduct}) => {
    const {visitor}=currentVisitor();
    const [product,setProduct]=useState({description:"",image:"",price:0,owner:visitor._id})
    const [profileImage,setProfileImge]=useState();
    
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0]);
        setProfileImge(acceptedFiles[0]);

      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    async function createProduct(e){
        e.preventDefault();
      

       const promise = await storage.createFile('64d7a62faef4f19b4ed7', uuidv4(), profileImage);

       console.log(promise);
       const getFile = await storage.getFilePreview('64d7a62faef4f19b4ed7', promise.$id);
       console.log(getFile);
       const create=await axios.put('http://localhost:8080/community/createProduct',{description:product.description,price:product.price,image:getFile.href,owner:product.owner},{ withCredentials: true });
       console.log(create);
       window.location.reload(); 
    }
  return (
    <div className='w-screen h-screen bg-black opacity-90 fixed z-30 justify-center items-center flex flex-row top-0 left-0'>
        <div className='w-[50vw] h-[50vh] bg-slate-300 rounded-md p-10'>
            <div className='flex flex-row justify-end'>
                <ImCross onClick={()=>setCreateProduct(false)}/>
            </div>
            <div className=''>
                <div className=''>
                   <label><b>Enter the price :</b></label>
                   <input type='number' placeholder="Enter the amount" className='px-5 py-2 rounded-md w-full my-3' onChange={(e)=>setProduct({...product,["price"]:e.target.value})}/>
                   <label><b>Enter the description of the product:</b></label>
                   <textarea   className='w-full h-[60px] px-5 py-2 rounded-md my-2' placeholder='Enter the details' onChange={(e)=>setProduct({...product,["description"]:e.target.value})}/>
                </div>
                <div className=''{...getRootProps()}>
                    <input {...getInputProps()}/>
                    <button className='border-2 border-primary text-slate-700 rounded-sm px-5 py-1 '><p className='font-mons'><b>{profileImage?"Image Uploaded":"Upload the image"}</b></p></button>
                </div>
            </div>
            <div className='my-5'>
                  <button className='bg-primary rounded-md text-white px-5 py-2 text-2xl' onClick={createProduct}>Add Item</button>
            </div>
           
        </div>
    </div>
  )
}

export default CreateProduct