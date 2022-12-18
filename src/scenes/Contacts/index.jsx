import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "green",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blue",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virutalScroller": {
            backgroundColor: "yellow",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "blue",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `grey !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
