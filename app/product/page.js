"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Page() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const router = useRouter();

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
  console.log(products);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    router.push(`/product/${productId}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
          <HomeIcon sx={{ fontSize: "35px" }} />
        </Typography>
      </nav>
    

      <Box
        sx={{
          width: "99%",
          display: "flex",
          flexWrap: "wrap",
          mx: "auto",
          justifyContent: "space-between",
        }}
      >
        {Array.isArray(products) &&
          products.map((product) => (
            <Box sx={{ width: "450px" }} key={product.id}> 
            </Box>
          ))}
      </Box>
    </Box>
  );
}

export default Page;
