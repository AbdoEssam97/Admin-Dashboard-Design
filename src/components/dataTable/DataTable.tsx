import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./dataTable.scss";

type propsType = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

// const handleDelete = (id: number) => {
//   //delete the item
//   // mutation.mutate(id)
// };

const DataTable = (props: propsType) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete">
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        // Add the action Buttons (Delete , View) to the columns array
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
