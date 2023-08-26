import React from 'react'
import Topbanner from './topBanner/Topbanner'
import CommonItems from './commonItems/CommonItems'
import RecycledProduct from './recycledProduct/RecycledProduct';
import MapCommunities from '../../Mapbox/MapCommunities'

const HomePage = () => {
  return (
    <div>
      <Topbanner/>
      <CommonItems/>
      <RecycledProduct/>
      <div className="my-10 text-center text-4xl  font-bold">
            <span className='text-primary'>Our</span> Communities
      </div>
      <div className='my-10 flex flex-row justify-center'>
          <MapCommunities/>
      </div>
    </div>
  )
}

export default HomePage
