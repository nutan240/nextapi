"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Link from "next/link";
import { SliderData } from "../components/sliderData";
import Banner from '../components/Banner';


function Page({ data }) {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const data1 = { id: 123, name: 'example' };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav
        style={{
          background:
            "linear-gradient(to left, rgb(255, 0, 110), #fb0b4c9e, #ff006e4a, #b44593)",
          width: "100%",
          minWidth: "700px",
          zIndex:'2000px'
        }}
        className=" text-white py-4 px-5 flex justify-between items-center"
      >
        <h3 className="text-xl font-bold ">LOGO</h3>
        <Typography
          sx={{ fontWeight: "bold" }}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        >
          <HomeIcon sx={{ fontSize: "35px" }} />
        </Typography>
      </nav>
      
      <Banner  slides={SliderData}/>
    <Box sx={{ width: "100%" , zIndex:66}}>

    

      <Box sx={{}}>
      <Box
        sx={{
          
          textDecoration: "underline",
          color: "rgb(37, 84, 112)",

        }}
      >
        <Typography
          sx={{
            fontSize: "55px",
            textAlign: "center",
            backgroundImage:
              "linear-gradient(90.9deg, #fe0f51 0.3%, rgb(37, 84, 112) 87.8%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          All Products
        </Typography>
      </Box>

      <Box
        sx={{
          width: "99%",
          display: "flex",
          flexWrap: "wrap",
          mx: "auto",
          justifyContent: "space-between",
          alignItems:'flex-start'
        }}
      >
        {Array.isArray(products) &&
          products.map((product) => (
            <Link href={ { pathname:`/product/singleproduct?productId=${product.id}` , query:{id: product?.id}}} key={product.id}>
              <Box sx={{ width: "450px" }} key={product.id}>
             
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    mx: "auto",
                    flexWrap: "wrap",
                    height: "80%",
                    overflow: "auto",
                    backgroundPosition: "center",
                  }}
                >
                  {product.images.length > 0 && (
                    <img  src={product.images[0]} alt={`Product 0`} height={'200px'} />
                  )}
                </Box>
                <Box sx={{ mx: "auto", height: "270px", paddingBottom: '20px' }}>
                  <Typography sx={{ fontSize: "27px", textAlign: "center" }}>
                    {product.brand}
                  </Typography>
                  <Typography
                    sx={{ color: "gray", textAlign: "center", fontSize: "20px", height: "120px" }}
                  >
                    Description: {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <Typography sx={{ background: 'pink', padding: '10px', width: '200px', borderRadius: '4px', color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: '20px' }}>
                      <MonetizationOnOutlinedIcon /> {product.price}
                    </Typography>
                    <Box>
                      <button style={{ background: "#ff006e", color: 'white', fontWeight: 'bold', width: '180px', display: 'flex', padding: '10px', marginX: 'auto', textAlign: 'center', borderRadius: '4px', justifyContent: 'center' }}>BUY NOW </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
      </Box>
</Box>
   
    </Box>
    
    </>
  );
}

export default Page;
