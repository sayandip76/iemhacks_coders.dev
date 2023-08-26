import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
//import routeConfig from '../../../route.config'
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { currentVisitor } from "../../logic/getUser";
import "./style.scss";

import ContentWrapper from "../contentwrapper/ContentWrapper";
import recycleLogo from "../../assets/recycleLogo.svg";
import CreateProfile from "../../PopupEvents/CreateProfile";
import ProfileMenu from "./profileMenu/ProfileMenu";
//import AddItem from "../../../PopupEvents/AddItem";

const Header = () => {
  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const {visitor,setVisitor}=currentVisitor();
  const { isLoading, isAuthenticated, error, user, getAccessTokenSilently,loginWithRedirect, loginWithPopup,logout } =
  useAuth0();
  const [createProfile,setCreateProfile]=useState(false);
 
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("show");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      
        <div className="mobileMenuItems">
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
        </div>
      
        <div className="logo">
          <img src={recycleLogo} onClick={()=>navigate("/")} />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigate("/")}>Home</li>
          <li className="menuItem" onClick={()=>navigate("/marketplace")}>Market</li>
          <li className="menuItem" onClick={()=>navigate("/store")}>Store</li>
          <li className="menuItem" onClick={()=>navigate("/communities")}>Community</li>
        
        </ul>
        <div className="login">
          {isAuthenticated?
            <>
            <button className="btn green logout" onClick={logout}>Logout</button>
            {!visitor?.isProfileCreated &&
                  <button className="btn green create" onClick={()=>{console.log(visitor);setCreateProfile(true)}} >Create Profile</button>}
            </>:

            <button className="btn green logout" onClick={loginWithPopup}>Login</button>
          }
        </div>
        {visitor?.isProfileCreated && <ProfileMenu userName={visitor?.email} fullName="Vikram Bhatra"/>}
        
      
      {createProfile && <CreateProfile setCreateProfile={setCreateProfile}/>}
    </header>
  );
};

export default Header;
