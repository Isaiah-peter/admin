import React, { useEffect } from "react";
import "./productlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/aipCall";

const ProductList = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const products = useSelector((state) => state.user.product.products);

  const columns = [
    { field: "ID", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productlistuser">
            <img
              className="productlistuserimage"
              src={params.row.image_url}
              alt=""
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "in_stock",
      headerName: "Stock",
      width: 200,
      editable: true,
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
            <Link className="link" to={`/product/${params.row?.ID}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row?.ID)}
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
