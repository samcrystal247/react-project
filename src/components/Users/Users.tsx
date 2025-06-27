import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [viewResult, setViewResult] = useState([]);

  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  const navigate = useNavigate();
  const UsersData = (_id: any) => {
    navigate(`/UsersData/${_id}`);
  };
  return (
    <div>
      <h1 style={{ cursor: "pointer" }}>users data</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {viewResult.map((Users: any) => (
          <>
            <Card style={{ width: "18rem" }}>
              {/* {items.images.map((items: any) => (
                <>
                  <Card.Img variant="top" src={items} />
                </>
              ))} */}
              {/* <a href={`/productDetails/${items._id}`}> */}
              {/* <Link to={`/productDetails/${items._id}`}> */}

              <Card.Body onClick={() => UsersData(Users._id)}>
                <Card.Text>{Users.firstName}</Card.Text>
                <Card.Text>{Users.lastName}</Card.Text>
                <Card.Text>{Users.phoneNumber}</Card.Text>
                <Card.Title>{Users.email}</Card.Title>
                <Card.Text>{Users.isAdmin}</Card.Text>
                <Card.Text>{Users.password}</Card.Text>
                <Card.Text>{Users.role}</Card.Text>
                <Card.Text>{Users.isBlocke}</Card.Text>
                <Card.Text>{Users.cart}</Card.Text>
                <Card.Text>{Users.wishlist}</Card.Text>
                <Card.Text>{Users.createdAt}</Card.Text>
                <Card.Text>{Users.updatedAt}</Card.Text>
                <Card.Text>{Users.__v}</Card.Text>
              </Card.Body>
              {/* </a> */}
              {/* </Link> */}
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
