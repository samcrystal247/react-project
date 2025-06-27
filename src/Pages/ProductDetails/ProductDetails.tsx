import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/products/${id}`
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  const [ViewResult, setViewResult] = useState<any>({});
  console.log(ViewResult);
  return (
    <div>
      <h1>product Details Screen</h1>
      <div>
        {ViewResult?.products?.images?.map((item: any) => (
          <>
            <img src={item?.url} alt="" />
          </>
        ))}
      </div>
      <h2>{ViewResult?.products?.name}</h2>
      <h2>{ViewResult?.products?.category}</h2>
      <h3>{ViewResult?.products?.brand}</h3>
      <h3>{ViewResult?.products?.description}</h3>
    </div>
  );
};

export default ProductDetails;
