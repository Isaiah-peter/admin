import React from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import Chart from "../../component/chart/Chart";
import { productdata } from "../../dummydata";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Product = () => {
  const param = useParams();
  const id = param.id;

  const product = useSelector((state) =>
    state.user.product.products.find((item) => item.ID === id)
  );
  console.log(product);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="topandbottom">
        <div className="productTop">
          <div className="productTopLeft">
            <Chart
              data={productdata}
              title="Product Sales Detail"
              dataKey={"sales"}
            />
          </div>
          <div className="productTopRight">
            <div className="productinfoTop">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg"
                alt=""
                className="productInfoImg"
              />
              <span className="productInfoName">Apple airpod</span>
            </div>
            <div className="productinfobottom">
              <div className="productInfoItem">
                <span className="productinfoKey">id:</span>
                <span className="productvalue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productinfoKey">Span:</span>
                <span className="productvalue">1123</span>
              </div>
              <div className="productInfoItem">
                <span className="productinfoKey">in stock:</span>
                <span className="productvalue">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productinfoKey">active:</span>
                <span className="productvalue">yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Productbottom">
          <form action="" className="productform">
            <div className="productformLeft">
              <label>Product Name</label>
              <input type="text" placeholder="Apple airpod" />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
              <label>Active</label>
              <select name="inActive" id="idActive">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="productformRight">
              <div className="productupload">
                <img
                  src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg"
                  alt=""
                  className="productimageedit"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <button className="productbuton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
