import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../component/chart/Chart";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart />
        </div>
        <div className="productTopRight"></div>
      </div>
      <div className="Productbottom"></div>
    </div>
  );
};

export default Product;
