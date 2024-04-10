import React, { useState } from "react";
import { Heart } from "react-bootstrap-icons";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
export default function WatchData({ product }) {
  let [data, setData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  

  console.log("🚀 ~ WatchData ~ data:", data);
  if (!product) {
    return null;
  }
  let ViewProduct = (id) => {
    setData(id);
  };
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };


  const productView = () => {
    axios({
      method: "post",
      url: "http://localhost:9999/user/signin",
      data: user,
    })
      .then((res) => {
        toast.success("User login success");
        console.log("Response data:", res.data);
        dispatch(login(res?.data));
        if (res?.data?.data?.userType === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Something went wrong with login");
      });
  };
  return (
    <div>
      {/* <Card style={{ width: "18rem" }}>
        <img alt="Sample" src={product.thumbnail} />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product.description}
          </CardSubtitle>
          <CardText>
            <p>
              <b>Price:</b> {product.price}
              <p>{product.id}</p>
            </p>
          </CardText>
          <Button>Add to cart</Button>
        </CardBody>
      </Card> */}

<Card
        style={{
          width: "18rem",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          transition: "transform 0.3s ease-in-out"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          alt="Sample"
          src={product.thumbnail}
          style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
        />
        <CardBody
          style={{
            backgroundColor: "#f8f9fa",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px"
          }}
        >
          <CardTitle tag="h5" style={{ color: "#333", marginBottom: "0.5rem" }}>
            {product.title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            style={{ color: "#666", marginBottom: "0.5rem" }}
          >
            {product.description}
          </CardSubtitle>
          <CardText style={{ marginBottom: "1rem", color: "#333" }}>
            <b>Price:</b> {product.price}
            <p>{product.id}</p>
          </CardText>
          {isHovered && (
            <Button
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: isLiked ? "#dc3545" : "#007bff",
                borderColor: isLiked ? "#dc3545" : "#007bff",
                fontWeight: "bold",
                padding: "8px",
                zIndex: "1" 
              }}
              onClick={toggleLike}
            >
              <Heart  /> {/* Heart icon */}
            </Button>
          )}
          {isHovered && (
            <Button
              style={{
                position: "absolute",
                bottom: "2px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "8px 16px",
                height: "40px", 
                width:"160px"
              }}
            >
              Add to cart
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
