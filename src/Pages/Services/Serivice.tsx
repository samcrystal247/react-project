import React from "react";
import "./Service.css";
// import img1 from "../../assets/image.png";
// import img2 from "../../assets/secondimage/image.png";
// import img3 from "../../assets/ThirdImg/image.png";
import { DataInfo } from "../../Data/Data";
const Serivice = () => {
  return (
    <div>
      <div className="our-servivices-div">
        <h3>Our Blogs</h3>
        <div className="hz-line"></div>
      </div>
      <div className="sreivice-section-flex">
        {DataInfo.map((items: any) => (
          <>
            <div>
              <img src={items.Image} alt="" />
              <h4>{items.tittle}</h4>
              <p>{items.desc}</p>
            </div>
          </>
        ))}
      </div>
      {/* gggggggggg */}
    </div>
  );
};

export default Serivice;
