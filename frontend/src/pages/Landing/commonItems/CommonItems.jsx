import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import PlasticBottle from "../../../assets/Plastic-water-bottles.jpg";
import Paper from "../../../assets/paper.jpg"
import Cardboard from "../../../assets/cardboard.jpg"
import Foil from "../../../assets/foil.jpg"
import Metals from "../../../assets/metals.jpg"
import DrinkCans from "../../../assets/drink cans.jpg"
import Glass from "../../../assets/glass.jpg"
import "./style.scss";

const CommonItems = () => {
  // const carouselContainer = useRef();
  // const navigation = (dir) => {
  //   const container = carouselContainer.current;

  //   const scrollAmount =
  //     dir === "left"
  //       ? container.scrollLeft - (container.offsetWidth + 20)
  //       : container.scrollLeft + (container.offsetWidth + 20);
    
  //   container.scrollTo({
  //     left: scrollAmount,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className="common-items">
      <ContentWrapper>
        <div className="title">Common Items to <span>Recycle</span></div>
        {/*<BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
  />*/}
        <div className="items">
          <div className="item">
            <div className="item-img">
              <img src={PlasticBottle} />
            </div>
            <div className="item-name">Plastic Bottles</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={Paper} />
            </div>
            <div className="item-name">Paper</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={Cardboard} />
            </div>
            <div className="item-name">Cardboard</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={Metals} />
            </div>
            <div className="item-name">Metals</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={Foil} />
            </div>
            <div className="item-name">Foils</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={DrinkCans} />
            </div>
            <div className="item-name">Drink cans</div>
          </div>
          <div className="item">
            <div className="item-img">
              <img src={Glass} />
            </div>
            <div className="item-name">Glass</div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CommonItems;
