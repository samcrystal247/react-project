import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);

  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/products"
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
  const productDetails = (_id: any) => {
    navigate(`/productDetails/${_id}`);
  };
  return (
    <div>
      <h1 style={{ cursor: "pointer" }}>Display Data Screen</h1>
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
              {items.images.map((items: any) => (
                <>
                  <Card.Img variant="top" src={items.url} />
                </>
              ))}
              {/* <a href={`/productDetails/${items._id}`}> */}
              {/* <Link to={`/productDetails/${items._id}`}> */}

              <Card.Body onClick={() => productDetails(items._id)}>
                <Card.Text>{items.color}</Card.Text>
                <Card.Text>{items.createdAt}</Card.Text>
                <Card.Text>{items.description}</Card.Text>
                <Card.Title>{items.tittle}</Card.Title>
                <Card.Text>{items.price}</Card.Text>
                <Card.Text>{items.quantity}</Card.Text>
                <Card.Text>{items.sold}</Card.Text>
                <Card.Text></Card.Text>

                <Button variant="primary">Add to cart</Button>
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

export default FetchAllData;
