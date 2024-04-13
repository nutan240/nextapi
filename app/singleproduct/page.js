"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


function page() {
  const [product, setProduct] = useState("");
const router = useRouter();
  const queryParams = useSearchParams("id");
  const id = queryParams.get("id");
  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      // setProduct(response.data);
      console.log(response, "response");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error, "error in fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(product, "producttttttt");
  return (
    <>
    <ArrowBackIosIcon onClick={() => router.push("/product")} />
      <Box sx={{ display: "flex" , width:'97%' , justifyContent:'center' }}>
        {product?.images?.map((link) => (
          <img src={link} alt={product?.title} width={400} />
        ))}
      </Box>

      <div> title : {product?.title}</div>
      <div> description : {product?.description}</div>
      <div> discountPercentage : {product?.discountPercentage}</div>
      <div> price : {product?.price}</div>
      <div> rating : {product?.rating}</div>
      <div> stock : {product?.stock}</div>
    </>
  );
}

export default page;
