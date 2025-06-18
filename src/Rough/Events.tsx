import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./DeleteRough";
import img1 from "../assets/image.png";
import img2 from "../assets/secondimage/image.png";
import img3 from "../assets/ThirdImg/image.png";
const Events = () => {
  const [deleteData, setdeleteData] = useState(false);
  const [DataInfo, setDataInfo] = useState<any>([]);
  console.log(DataInfo);
  const sample = () => {};
  const [toggle, setToggle] = useState<any>("God is good");
  console.log(toggle);
  const handleClick = () => {
    setToggle(12);
  };
  const handleDelete = () => {
    setdeleteData(true);
  };
  const fetchData = () => {
    setDataInfo([
      {
        id: 1,
        Image: img1,
        tittle: "Web Design",
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },

      {
        id: 2,
        Image: img2,
        tittle: "Graphic Design",
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },

      {
        id: 3,
        Image: img3,
        tittle: "Content Creation",
        desc: "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      },
    ]);
  };

  return (
    <div>
      <button onClick={handleClick}>
        click me:<span>{toggle}</span>
      </button>
      <div>
        <button onClick={handleDelete}>
          <FaTrash style={{ color: "red", fontSize: "20px" }} />
        </button>
      </div>
      {deleteData && <DeleteModal />}
      <div>
        <h1 onClick={fetchData} style={{ cursor: "pointer" }}>
          display my data
        </h1>
        <div style={{ display: "flex" }}>
          {DataInfo.map((items: any) => (
            <>
              <div>
                <h3>{items.tittle}</h3>
                <img src={items.Image} alt="" />
                <p>{items.desc}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
