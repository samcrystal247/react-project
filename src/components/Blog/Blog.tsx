import React from "react";
import { DataInfo } from "../../Data/Data";

const Blog = () => {
  return (
    <div>
      {DataInfo.map((items: any) => (
        <>
          <div>{items.image}</div>
        </>
      ))}
    </div>
  );
};

export default Blog;
