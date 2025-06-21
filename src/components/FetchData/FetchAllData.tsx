import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
  return (
    <div>
      <h1 style={{ cursor: "pointer" }}>Display Data Screen</h1>
      <div>
        {viewResult.map((items: any) => (
          <>
            <Card style={{ width: "18rem" }}>
              {items.images.map((items: any) => (
                <>
                  <Card.Img variant="top" src={items.url} />
                </>
              ))}

              <Card.Body>
                <Card.Text>{items.color}</Card.Text>
                <Card.Title>{items.tittle}</Card.Title>
                <Card.Text>{items.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default FetchAllData;
