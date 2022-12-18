import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Box, IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedIcon from "@mui/icons-material/Feed";
import ExtensionIcon from "@mui/icons-material/Extension";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import LayersIcon from "@mui/icons-material/Layers";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{ color: "grey" }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("My First Project");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `white !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transperant !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#44454c !important",
        },
        "& .pro-menu-item.active": {
          color: "#777 !important",
          backgroundColor: "#AAA",
        },
        borderRight: "2px solid lightgrey",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              {isCollapsed ? (
                <img
                  alt="Short Logo"
                  width="50px"
                  height="50px"
                  src={`../../assets/longshotlogoshort.jpg`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              ) : (
                <img
                  alt="Full Logo"
                  width="150px"
                  height="50px"
                  src={`../../assets/longshotlogofull.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
              )}
            </Box>
          </Box>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="My First Project"
              icon={<FavoriteIcon />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<DashboardIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Recipes"
              to="/recipes"
              icon={<Icon icon="mdi:chef-hat" />}
              selected={selected}
              setSelected={setSelected}
            />
            <Box sx={{ width: 1, borderBottom: 1 }}></Box>
            <Item
              title="Blog"
              to="/blog"
              icon={<FeedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Templates"
              to="/templates"
              icon={<ExtensionIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Favorites"
              to="/favorites"
              icon={<FavoriteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="CustomTemplate"
              to="/customtemplate"
              icon={<CircleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Integrations"
              to="/integrations"
              icon={<LayersIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Semrush"
              to="/semrush"
              icon={<LocalFireDepartmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <KeyboardTabIcon /> : undefined}
            style={{
              color: "grey",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="5px"
              >
                <IconButton>
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Typography variant="h5">Collapse</Typography>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
