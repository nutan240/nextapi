import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url('/nav.jpeg')`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Navbar />
    </Box>
  );
}
