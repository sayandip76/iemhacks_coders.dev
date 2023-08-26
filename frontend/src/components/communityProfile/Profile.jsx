import React from 'react'
import './Profile.css';

const Profile = ({image,name,descrip}) => {
  return (
    <div className='profile-main'>
      <div className='profile-sub'>
        <div className='profile-image'>
          <img src={image} alt="Profile Image" />
        </div>
        <div className='profile-descrip'>
          <div className=''>
            <h1 className='profile-name' >{name}</h1>
          </div>
          {/* <br /> */}
          <div className=''>
            <p className='profile-info' >{descrip}</p>
          </div>
          {/* <br /> */}
          <div className='profile-loc'>
            <label>Latitude:&nbsp;<span>&nbsp;23.5</span></label>
            &nbsp;
            <label>Longitude:&nbsp;<span>&nbsp;45.5</span></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
