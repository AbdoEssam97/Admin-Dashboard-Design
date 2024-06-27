import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import "./products.scss";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "title",
    width: 230,
    type: "string",
  },
  {
    field: "color",
    headerName: "color ",
    width: 120,
    type: "string",
  },
  {
    field: "producer",
    headerName: "producer",
    width: 150,
    type: "string",
  },
  {
    field: "price",
    headerName: "price",
    width: 100,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "inStock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add setOpen={setOpen} columns={columns} slug="product" />}
    </div>
  );
};

export default Products;
