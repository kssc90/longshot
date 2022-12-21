import { Box } from "@mui/material";
// import Header from "../../components/Header"
import Contacts from "./Contacts/index";
import FirstProjectHeader from "./FirstProjectHeader";

const FirstProject = () => {
  return (
    <div style={{ backgroundColor: "#f9fafc" }}>
      <header>
        <FirstProjectHeader />
      </header>
      <main>
        <Contacts />
      </main>
    </div>
  );
};

export default FirstProject;
