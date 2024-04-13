"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Footer from "../components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function page() {
  const [Food, setFood] = useState("");
  const router = useRouter();
  const queryParams = useSearchParams("id");
  const id = queryParams.get("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setFood(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(Food.instructions, "foooddddd");

  return (
    <>
      <Card sx={{ padding: "25px" }}>
        <ArrowBackIosIcon onClick={() => router.push("/about")} />
        <div className="text-center flex">
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <img src={Food.image} alt={Food} width={900} />
              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                level="title-lg text-center"
              >
                {Food.name}
              </Typography>
            </Box>
          </Typography>
          <Box>
            <Typography
              sx={{ width: "70%", textAlign: "center", mx: "auto" }}
              level="body-sm"
            >
              <Typography sx={{ color: "rgb(141 56 56)", fontSize: "25PX" }}>
                {" "}
                INGREDIENTS
              </Typography>

              <Typography>{Food.ingredients}</Typography>
            </Typography>
            <Typography
              sx={{ width: "70%", textAlign: "center", mx: "auto" }}
              level="body-sm"
            >
              <Typography sx={{ color: "rgb(141 56 56)", fontSize: "25PX" }}>
                {" "}
                INSTRUCTIONS
              </Typography>

              <Typography>{Food.instructions}</Typography>
            </Typography>

            <Typography
              sx={{ width: "70%", textAlign: "center", mx: "auto" }}
              level="body-sm"
            >
              Instructions :{Food.instructions}
            </Typography>
            <CardContent orientation="horizontal">
              <div className="flex gap-[50px] ml-3  w-[100%]">
                <div className="flex gap-[60px] ml-3  w-[50%]">
                  <Typography
                    sx={{
                      fontStyle: "italic",
                      fontSize: "20px",
                      color: "blue",
                    }}
                    level="body-xs"
                  >
                    Total price:
                  </Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      color: "green",
                      backgroundColor: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    order now
                  </Button>
                </Box>
              </div>
            </CardContent>
          </Box>
        </div>
        <Footer />
      </Card>
    </>
  );
}

export default page;
