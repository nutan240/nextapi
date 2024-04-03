"use client"
import React from 'react'
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useRouter } from 'next/navigation';
import Banner from '../components/Banner';
import { SliderData } from '../components/sliderData';
import Slider from '../components/Slider'
function page() {
  const router = useRouter();
  return (
    <>
    <Box>
      <nav
        style={{
          background:
            "linear-gradient(to left, rgb(255, 0, 110), #fb0b4c9e, #ff006e4a, #b44593)",
          width: "100%",
          minWidth: "700px",
        }}
        className=" text-white py-4 px-5 flex justify-between items-center"
      >
        <h3 className="text-xl font-bold ">LOGO</h3>
        <Typography
          sx={{ fontWeight: "bold" }}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
        <Typography>ABOUT</Typography>

        </Typography>
      </nav>
      <Banner  slides={SliderData}/>
      <Slider/>
      </Box>
    </>
  )
}

export default page