import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>About</h1>
          <span>
          Apo Monic Motorcycle Parts and Accessories is a motorcycle focused service and retail store that was established in 2018. Our professional mechanic is capable of providing services to those who are motorcycle enthusiasts that are looking for a pleasant, efficient and transparent purchasing and servicing experience.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          09567102859 - Loreto Ablaza<br></br>
https://www.facebook.com/ammpa19<br></br>
Opens on Monday – Sunday 7:00 AM – 5:30 PM 
and Closed on Thursday<br></br>
Purok 4, Sta. Monica Hagonoy, Bulacan
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">AM MOTORS</span>
          <span className="copyright">
            © Copyright 2022. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
