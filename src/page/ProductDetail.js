import React, { useEffect, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/1000sayhi/noona-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img width={300} src={product?.img} />
        </Col>
        <Col className="product-text">
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div className="detail-conscious">
            {product?.choice ? "conscious choice" : ""}
          </div>
          <Dropdown>
            <Dropdown.Toggle size="sm" variant="white" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className="purchase-button" variant="dark">
            buy
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
