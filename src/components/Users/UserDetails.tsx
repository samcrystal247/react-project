import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersData = () => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
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
      <h1>User Details Page</h1>
      <div>
        {/* {ViewResult?.products?.images?.map((item: any) => (
          <>
            <img src={item?.url} alt="" />
          </>
        ))} */}
      </div>
      <h2>{ViewResult?._id}</h2>
      <h2>{ViewResult?.FirstName}</h2>
      <h3>{ViewResult?.LastName}</h3>
      <h3>{ViewResult?.email}</h3>
    </div>
  );
};

export default UsersData;
