import Navbar from "./components/Navbar";
import { Box, Button, Typography } from "@mui/material";

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
      <Box>
        <Typography
          sx={{
            fontSize: "100px",
            textAlign: "center",
            fontStyle: "oblique",
            backgroundImage:
              "linear-gradient(90.9deg, #fe0f51 0.3%, rgb(37, 84, 112) 87.8%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WEB FLOW
        </Typography>
        <Typography
          sx={{
            fontSize: "50px",
            color: "white",
            width: "50%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Creative power that goes beyond templates ....
        </Typography>
        <Typography sx={{fontSize: "14px",
            color: "white",
            width: "30%",
            marginX: "auto",
            my:1,
            textAlign: "center",}}>
          You design, we generate the code — for everything from fully custom
          layouts to complex animations.
        </Typography>
        <Box sx={{width:'300px', mx:'auto', mt:3}}>
        <button style={{background:"#ff006e", color:'white', fontWeight:'bold', width:'230px' , display:'flex' , padding:'10px' , marginX:'auto' , textAlign:'center' , borderRadius:'4px' , justifyContent:'center'}}>GET STARTED —<Typography sx={{ml:'6px'}}>it's free</Typography></button>
        </Box>
       
      </Box>
    </Box>
  );
}
