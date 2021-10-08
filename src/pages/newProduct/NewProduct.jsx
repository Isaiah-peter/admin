import React, { useState } from "react";
import "./newProduct.css";

const NewProduct = () => {
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const handleCat = (e) => {
    setCat(
      e.target.value.split(",").map((value) => {
        return { name: value };
      })
    );
  };

  const handleColor = (e) => {
    setColor(
      e.target.value.split(",").map((value) => {
        return { name: value };
      })
    );
  };

  const handleSize = (e) => {
    setSize(
      e.target.value.split(",").map((value) => {
        return { name: value.toUpperCase() };
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      category: cat,
      size: size,
      color: color,
    };

    console.log(data);
  };

  return (
    <div className="newProduct">
      <h1 className="newproductTitle">New Product</h1>
      <form className="newproductform">
        <div className="newproductitem">
          <label htmlFor="file">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newproductitem">
          <label htmlFor="file">Category</label>
          <input
            type="text"
            placeholder="split with comma eg phone, woman, dress"
            onChange={handleCat}
          />
        </div>
        <div className="newproductitem">
          <label htmlFor="file">Color</label>
          <input
            type="text"
            placeholder="split with comma eg red, blue"
            onChange={handleColor}
          />
        </div>
        <div className="newproductitem">
          <label htmlFor="file">Size</label>
          <input
            style={{ textTransform: "uppercase" }}
            type="text"
            placeholder="XL,X,S"
            onChange={handleSize}
          />
        </div>
        <div className="newproductitem">
          <label htmlFor="file">Stock</label>
          <input type="number" placeholder="stocks" />
        </div>
        <button onClick={handleSubmit} className="submitbutton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
