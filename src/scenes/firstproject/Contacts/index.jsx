import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Tabs,
  Tab,
  // Button,
  // Modal,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import { mockDataContacts } from "../../../data/mockData";
import { useState, useEffect } from "react";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


const Contacts = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [rows, setRows] = useState([]);
  const [related, setRelated] = useState([]);
  const [ques, setQues] = useState([]);

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const columns = [
    { field: "0", headerName: "Keyword", width: 200 },
    { field: "", headerName: "Intent", width: 80 },
    { field: "1", headerName: "Volume", width: 100 },
    { field: "7", headerName: "KD%", width: 70 },
    { field: "3", headerName: "CPC", width: 70 },
    { field: "4", headerName: "Competition", width: 70 },
    { field: "5", headerName: "Results", width: 100 },
  ];


  useEffect(() => {
    axios.get("data.json").then((response) => {
      setRows(response.data.raw_broadmatch_data);
      console.log(response.data.raw_broadmatch_data);
    });
  }, []);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setRelated(response.data.raw_related_data);
      console.log(response.data.raw_broadmatch_data)

    });
  }, []);

  useEffect(() => {
    axios.get("data.json").then((response) => {
      setQues(response.data.raw_question_data);
      console.log(response.data.raw_broadmatch_data);

    });
  }, []);

  // const columns = [
  //   { field: "id", headerName: "ID", flex: 0.5 },
  //   { field: "registrarId", headerName: "Registrar ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     headerAlign: "left",
  //     align: "left",
  //     flex: 0.5,
  //   },
  //   { field: "phone", headerName: "Phone Number", flex: 1 },
  //   { field: "email", headerName: "Email", flex: 1 },
  //   { field: "address", headerName: "Address", flex: 1 },
  //   { field: "city", headerName: "City", flex: 1 },
  //   { field: "zipCode", headerName: "ZipCode", flex: 1 },
  // ];

  const theme = createTheme({
    palette: {
      background: {
        paper: "#fff",
      },
      text: {
        primary: "#173A5E",
        secondary: "#46505A",
      },
    },
  });

  // const style = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  // };

  
  return (
    <Box m="0 10rem">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            width: "100%",
            flexDirection: "row",
            margin: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              border: "2px solid black",
              borderRadius: "15px",
              bgcolor: "background.paper",
              justifyContent: "space-between",
              width: "50%",
              padding: "2%",
            }}
          >
            <Box marginBottom="10px">
              <Typography variant="p1">Volume</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography sx={{ marginRight: "10px" }} variant="h5">
                480
              </Typography>
              <img
                src="https://images.emojiterra.com/twitter/v14.0/512px/1f1fa-1f1f8.png"
                style={{ height: "20px", aspectratio: "2:3" }}
                alt="USA Flag"
              />
            </Box>

            <Box border="1px solid lightgrey" m="20px" />
            <Typography variant="p1">Keyword Difficulty</Typography>
            <Box display="flex" alignItems="center" p="10px 0">
              <Box pr="10px">
                <Box className="number">46 %</Box>
                <Box className="possible">Possible</Box>
              </Box>
              <img
                src="../../../assets/yellowRound.png"
                style={{ height: "50px", aspectratio: "1:1" }}
                alt="Yellow Round"
              />
            </Box>
            <Typography variant="p1">
              Slightly more competition. You will need well-structured and
              unique content appropriately optimized for your keywords.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "50%",
              padding: "0 2%",
            }}
          >
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "5px",
                bgcolor: "background.paper",
                justifyContent: "space-between",
                padding: "2%",
                height: "33%",
              }}
            >
              <Typography variant="h5">Intent</Typography>
              <Box sx={{ display: "inline", backgroundColor: "yellow" }}>
                <Typography>Commercial</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "5px",
                bgcolor: "background.paper",
                justifyContent: "space-between",
                padding: "2%",
                height: "33%",
              }}
            >
              <Typography variant="p1">Results</Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                313M
              </Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "5px",
                bgcolor: "background.paper",
                justifyContent: "space-between",
                padding: "2%",
                height: "33%",
              }}
            >
              <Box display="flex" justifyContent="space-around">
                <Box>
                  <Typography variant="p1">CPC</Typography>
                  <Typography variant="h5">$0.12</Typography>
                </Box>
                <Box>
                  <Typography variant="p1">Com.</Typography>
                  <Typography variant="h5">0.24</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Broad Match" {...a11yProps(0)} />
            <Tab label="Related" {...a11yProps(1)} />
            <Tab label="Questions" {...a11yProps(2)} />
            {/* <div>
              <Button onClick={handleOpen} className="right_btn">
                Add to List
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Drag & Drop
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <DragDrop />
                  </Typography>
                </Box>
              </Modal>
            </div> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div style={{ height: 800, width: "100%" }}>
            <DataGrid
              getRowId={(item) => item[0]}
              rows={rows}
              columns={columns}
              checkboxSelection
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(item) => item[0]}
              rows={related}
              columns={columns}
              checkboxSelection
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(item) => item[0]}
              rows={ques}
              columns={columns}
              checkboxSelection
            />
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Contacts;
