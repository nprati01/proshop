import React from "react";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../slices/productsApiSlice";

//state is held at app level -updated through actions
// dispatched to a reducer function and the updated state is sent down to other components that need it
//so all parts of the app have the changes to state
const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div> {error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Newest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomePage;
