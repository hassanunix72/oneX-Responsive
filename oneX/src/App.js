import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import SectionCollection from "./components/SectionCollection";
import AccordData from "./components/AccordData";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <Box>
      <Navbar />
      <SectionCollection />
      <AccordData />
      <CustomFooter />
    </Box>
  );
}

export default App;
