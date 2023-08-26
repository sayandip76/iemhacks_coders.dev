import React,{useState,useEffect,useContext,createContext} from 'react'
import { ethers } from 'ethers';
export const Data=createContext();

const ConnectWallet = ({children}) => {

    const [status,setStatus]=useState('notconnected');
    const [contract,setContract]=useState(null);
    const [provider,setProvider]=useState(null);
    const [account,setAccount]=useState(0);
    const [chain,setChain]=useState(false);

    useEffect(()=>{

        const loadContents=async()=>{
           
            if(window.ethereum){
              let provider=window.ethereum;
                try{
                  //await provider.enable();
                }
             
                catch(err){
                  console.log(err);
                }
                /* const web3 = new ethers.providers.Web3Provider(provider);
                const signer = web3.getSigner(); */
                const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                const accounts=await window.ethereum.request({method:'eth_accounts'});
                 
                //const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log(accounts);
                if(accounts.length>0){
                  setStatus("connected");
                  setProvider(provider);
                  setChain(chainId);
                  setAccount(accounts[0]);
                }

          } 
          
        }
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        }); 
    
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        loadContents();
      },[])
    const value={status,setStatus,account,setAccount,chain,setChain,contract,setContract,provider,setProvider}
    return(
        <Data.Provider value={value}>
            {children}
        </Data.Provider>
    )
}

export default ConnectWallet
export function getConnection(){
    return useContext(Data);
}