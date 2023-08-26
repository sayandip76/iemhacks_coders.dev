import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <section className="footer">
      <ContentWrapper>
        <div className="menuItems">
          <div className="contents">
            <div className="menuItem">
              <h4>Terms Of Use</h4>
              <p>Lorem</p>
              <p>adipiscing</p>
              <p>tempor</p>
              <p>sit amet</p>
            </div>
            <div className="menuItem">
              <h4>About</h4>
              <p>Lorem</p>
              <p>adipiscing</p>
              <p>tempor</p>
              <p>sit amet</p>
            </div>
            <div className="menuItem">
              <h4>Privacy Policy</h4>
              <p>Lorem</p>
              <p>adipiscing</p>
              <p>tempor</p>
              <p>sit amet</p>
            </div>
            <div className="menuItem">
              <h4>FAQs</h4>
              <p>Lorem</p>
              <p>adipiscing</p>
              <p>tempor</p>
              <p>sit amet</p>
            </div>
          </div>
          <div className="connect">
            <div className="newsletter">
              <h4>STAY TUNED</h4>
              <p>
                Subscribe to our newsletter and never miss latest products,
                news, initiatives, etc.
              </p>
              <div className="container">
                <div className="content">
                  <form className="subscription">
                    <input className="add-email" type="email" placeholder="Enter your Email ID"/>
                    <button className="submit-email" type="button">
                      <span className="before-submit">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="social">
              <h4>Follow us here.</h4>
              <div className="socialIcons">
                <Link to="https://www.linkedin.com/" target="_blank">
                  <span className="icon">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link to="https://github.com/" target="_blank">
                  <span className="icon">
                    <FaGithub />
                  </span>
                </Link>
                <Link to="https://twitter.com/" target="_blank">
                  <span className="icon">
                    <FaTwitter />
                  </span>
                </Link>
                <Link to="https://www.instagram.com/" target="_blank">
                  <span className="icon">
                    <FaInstagram />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Footer;