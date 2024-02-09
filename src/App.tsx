import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Grid container position="relative" height="calc(100% - 64px)">
        <Grid xs={3} position="fixed" top={50}>
          <Sidebar />
        </Grid>
        <Grid
          xs={6}
          position="absolute"
          right="30%"
          top={40}
          // sx={{ overflowY: "scroll" }}
        >
            <Feed />
          
        </Grid>
        <Grid xs={3} position="absolute" right="10%" top={40}>
          <Rightbar />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
