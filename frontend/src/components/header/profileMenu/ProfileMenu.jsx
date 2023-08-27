import user from './img/user.png';
import edit from './img/edit.png';
import inbox from './img/envelope.png';
import settings from './img/settings.png';
import help from './img/question.png';
import logout from './img/log-out.png';
import { ethers } from 'ethers';
import { getConnection } from '../../../logic/connectWallet'
import "./style.scss";
import { currentVisitor } from "../../../logic/getUser";
import CreateProduct from '../../../PopupEvents/CreateProduct';

import React, {useState, useEffect, useRef} from 'react';

function ProfileMenu({userName, fullName}) {

  const [open, setOpen] = useState(false);
  const [createProduct,setCreateProduct]=useState(false);
  const [addItem,setAddItem]=useState(false);

  let menuRef = useRef();

  const {visitor,setVisitor}=currentVisitor();
  const {setStatus,account,setAccount,setChain,contract,setContract,provider,setProvider}=getConnection();
  

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };
 

    document.addEventListener("mousedown", handler);


    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
   const setMetamask=async(e)=>{
    e.preventDefault();
    let provider=window.ethereum;
    try{
      await provider.enable();
    }
 
    catch(err){
      console.log(err);
    }
    console.log(provider);
    const web3 = new ethers.providers.Web3Provider(provider);
    const signer = web3.getSigner(); 
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    

    setAccount(accounts[0]);
    setStatus("connected");
    setProvider(provider);
    setChain(chainId);
  }
 
  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>{userName}<br/><span>{fullName}</span></h3>
          <ul>
            <li className = 'dropdownItem'><img src={user}></img>
              <a href= {visitor?.visitorDesig=="Collector"?"/collectorProfile":"/communityProfile"}> Profile </a>
            </li>
            <li className = 'dropdownItem'><img src={edit}></img>
              <a href="/communityProfile"> Edit Profile </a>
            </li>
            {visitor?.visitorDesig=="Community" && <li className = 'dropdownItem' onClick={()=>setCreateProduct(true)}><img src={edit}></img><a> Create Product </a></li>}
            
            <button disabled=
            {!account==0} className='bg-primary rounded-md w-full text-white font-mons px-5 py-2 text-xl' onClick={setMetamask}>{account==0?"Connect Wallet":account.slice(0,6)+"..."+account.slice(-7,)}</button> 
          </ul>
        </div>
      </div>
    {addItem && <AddItem  setAddItem={setAddItem}/>
      }
      {createProduct && <CreateProduct setCreateProduct={setCreateProduct}/>
    }
    </div>
  );
}

function DropdownItem({img,text}){
  return(
    <li className = 'dropdownItem'>
      <img src={img}></img>
      <a> {text} </a>
    </li>
  );
}
function DropdownButton({text}){
  return(

      <button className='bg-primary rounded-md text-white font-mons px-5 py-2 text-xl'>{text}</button>
  );
}

export default ProfileMenu;
