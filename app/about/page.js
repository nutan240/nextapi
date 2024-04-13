"use client"
import React from 'react'
// import { Box, Typography } from "@mui/material";

import { useRouter } from 'next/navigation';
import Banner from '../components/Banner';
import { SliderData } from '../components/sliderData';
import Slider from '../components/Slider'
import { Box, Typography } from '@mui/material';
import RecipesSlider from '../components/RecipesSlider';
import { RecipesData } from '../components/RecipesData';
import Footer from '../components/Footer';
function page() {
  const router = useRouter();

  return (
    <>
    <Box  sx={{background:'#c6b8ab85'}}>
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
          onClick={() => router.push("/home")}
        >
        About

        </Typography>
      </nav>
      
      <RecipesSlider slides={RecipesData} />
      <Slider slides={SliderData}/>
      <Footer/>
      </Box>
    </>
  )
}

export default page