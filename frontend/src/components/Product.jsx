import { Card, CardBody } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} varient="top"></Card.Img>
      </a>
      <CardBody>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div"></Card.Title>
          <strong>{product.name}</strong>
        </a>

        <Card.Text as="h3">${product.price}</Card.Text>
      </CardBody>
    </Card>
  );
};

export default Product;
