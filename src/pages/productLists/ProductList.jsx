import React, { useEffect, useState } from "react";
import "./productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/aipCall";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getProducts(dispatch);
  });

  const products = useSelector((state) => state.product.products);

  const columns = [
    { field: "ID", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistuser">
            <img className="productlistuserimage" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row?.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row?.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist">
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
        getRowId={(row) => row.ID}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
