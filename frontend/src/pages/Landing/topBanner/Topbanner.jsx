import React from "react";
import "./style.scss";
import waste_recycle from "/src/assets/waste_recycle.svg";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Earth from '../../../3D_componet/Earth'

const Topbanner = () => {
  return (
    <>
      <ContentWrapper>
        <div className="topBanner">
          <div className="topBannerContent">
            <p className="title">Reduce Reuse <span>Recycle.</span></p>
            <span className="subTitle">
            Explore the curated pathways of our Recycling Wonderland, where once-forgotten items are reimagined into art, technology, and possibility
            </span>
            <button className="btn green">Get Started</button>
          </div>
          <div className="side-img">
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Earth/>
            </Canvas>
          </div>
        </div>
        {/*<div style={{height: 1000}}>
    </div>*/}
      </ContentWrapper>
      <div className="opacity-layer"></div>
    </>
  );
};

export default Topbanner;
