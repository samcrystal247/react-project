import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";

const DeleteUsersData = () => {
  const [viewResult, setViewResult] = useState([]);

  console.log(viewResult);
  const handleDelete = async (id: any) => {
    try {
      await axios.delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${id}`
      );
      window.location.reload();
    } catch (error: any) {
      console.log(error.data.response);
    }
  };
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

  return (
    <div>
      <h1>User Details Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {viewResult.map((items: any) => (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Link to={`/studentsApi/${items._id}`}>
                  <Card.Title>{items.firstName}</Card.Title>
                  <Card.Title>{items.lastName}</Card.Title>
                  <Card.Title>{items.phoneNumber}</Card.Title>
                  <Card.Title>{items.email}</Card.Title>
                  <Card.Title>{items.password}</Card.Title>
                  <Card.Title>{items.isBlocked}</Card.Title>
                  <Card.Title>{items.createdAt}</Card.Title>
                  <Card.Title>{items.updatedAt}</Card.Title>
                </Link>
                <FaTrash
                  style={{ color: "red", fontSize: "20px", cursor: "pointer" }}
                  onClick={() => handleDelete(items._id)}
                />
                {/* you have to pass id to the handleDelete function so as to be
                able to delete the individual data  */}
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default DeleteUsersData;
