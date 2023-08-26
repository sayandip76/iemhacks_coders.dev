import React from 'react';
import product from './useData';
const productsObject = product.reduce((obj, product) => {
  obj[product.id] = product;
  return obj;
}, {});

const Useful = () => {
  return (
    <div style={carouselStyles.centerplace}>
    <div style={carouselStyles.container}>
      <h2 style={carouselStyles.title}> <b>Products Recycled</b></h2>
      <div style={carouselStyles.carousel}>
      {Object.values(productsObject).map((product) => (
          <div key={product.id} style={carouselStyles.item}>
            <div style={carouselStyles.thumbWrapper}>
              <span style={carouselStyles.wishIcon}><i className="fa fa-heart-o"></i></span>
              <div style={carouselStyles.imgBox}>
                {/* <img src={product.image} style={carouselStyles.img} alt={product.name} /> */}
              {product.image}
              </div>
              <div style={carouselStyles.thumbContent}>
                <h4>{product.name}</h4>
                <a href="/" style={carouselStyles.btn}>Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const carouselStyles = {
  // centerplace:{
  //   display: "flex",
  //   justifyContent: "center",
  //   width: "100vw",
  //   height:""
  // },
  container: {
    fontFamily: "Open Sans, sans-serif",
    background: "#e2eaef",
    padding: "30px 0",

  },
  title: {
    color: "#000",
    fontSize: "26px",
    fontWeight: 300,
    textAlign: "center",
    textTransform: "uppercase",
    position: "relative",
    marginBottom: "60px",
  },
  carousel: {
    margin: "50px auto",
    padding: "0 70px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:"20x",
    alignItems:"center",
  },
  item: {
    color: "#747d89",
    minWidth: "225px",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: "30px",
    marginRight: "10px",
    marginLeft:"10px",
    // gap:"20x",
    flex: "0 0 calc(25% - 30px)",
  },
  thumbWrapper: {
    padding: "25px 15px",
    background: "#fff",
    borderRadius: "6px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 2px 3px rgba(0,0,0,0.2)",
  },
  wishIcon: {
    position: "absolute",
    right: "10px",
    top: "10px",
    zIndex: 99,
    cursor: "pointer",
    fontSize: "16px",
    color: "#abb0b8",
  },
  imgBox: {
    height: "120px",
    marginBottom: "20px",
    width: "100%",
    backgroundColor:"green",
    position: "relative",
    borderRadius:"90%",
    color:"black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"40px",
    fontWeight:"bold",

  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "inline-block",
    position: "absolute",
    bottom: 0,
    margin: "0 auto",
    left: 0,
    right: 0,
  },
  thumbContent: {
    marginBottom: "5px",
  },
  btn: {
    color: "#7ac400",
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: "bold",
    background: "none",
    border: "1px solid #7ac400",
    padding: "6px 14px",
    marginTop: "5px",
    lineHeight: "16px",
    borderRadius: "20px",
    textDecoration: "none",
    display: "inline-block",
    cursor: "pointer",
  },
};

export default Useful;
