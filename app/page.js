"use client"
import { useRouter } from "next/navigation";

import { Box, Button, Typography } from "@mui/material";
import Loginpage from "./api/Loginpage";

export default function Home() {
  const router = useRouter();
  return (
    <Box
      sx={{
       
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:'#9b9bed',
        width:'100%'
      }}
    >
    <Loginpage/>
      
    </Box>
  );
}
