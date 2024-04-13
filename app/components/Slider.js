import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";

const Carousel = ({ slides }) => {
  const [products, setProducts] = useState([]);
  console.log(products, "productsproducts");
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        setProducts(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Slider {...settings}>
        <div className="mt-[30px] bg-#c6b8ab85">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              paddingY: 3,
              background: "#c6b8ab85",
            }}
          >
            {products.slice(0, 4).map((product) => (
              <Card sx={{ width: 326 }}>
                <div className="text-center">
                  <Typography sx={{display:'flex' , justifyContent:'center'}}>
                    <img src={product.image} alt={products} />
                  </Typography>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                    level="title-lg text-center"
                  >
                    {product.name}
                  </Typography>
                  <Typography level="body-sm">
                    rating :{product.rating}
                  </Typography>
                </div>

                <CardContent orientation="horizontal">
              <div className="flex gap-[110px] ml-3 ">
                <Typography sx={{fontStyle:'italic' , fontSize:'20px'}}  level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Box sx={{ display: "flex" }}>
                <Button sx={{
                  color:'green', backgroundColor:'orange' ,fontWeight:'bold' }} >order now</Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 ,
                   }}
                >
                  Explore
                </Button>
              </Box>
            </CardContent>
              </Card>
            ))}
          </Box>
        </div>
        <div className="text-center">
          <div className="mt-[30px]">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                paddingY: 3,
                background: "#c6b8ab85",
              }}
            >
              {products.slice(5, 9).map((product) => (
                <Card sx={{ width: 326 }}>
                  <div>
                    <Typography sx={{display:'flex' , justifyContent:'center'}}>
                      <img src={product.image} alt={products} />
                    </Typography>
                    <Typography
                      sx={{ fontSize: "20px", fontWeight: "bold" }}
                      level="title-lg text-center"
                    >
                      {product.name}
                    </Typography>
                    <Typography level="body-sm">
                      rating :{product.rating}
                    </Typography>
                  </div>

                  <CardContent orientation="horizontal">
              <div className="flex gap-[110px] ml-3 ">
                <Typography sx={{fontStyle:'italic' , fontSize:'20px'}}  level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Box sx={{ display: "flex" }}>
                <Button sx={{
                  color:'green', backgroundColor:'orange' ,fontWeight:'bold' }} >order now</Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 ,
                   }}
                >
                  Explore
                </Button>
              </Box>
            </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        </div>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              // background: "#c",
              paddingY: 3,
            }}
          >
            {products.slice(11, 15).map((product) => (
              <Card sx={{ width: 326 }}>
                <div className="text-center">
                  <Typography sx={{display:'flex' , justifyContent:'center'}}>
                    <img src={product.image} alt={products} />
                  </Typography>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                    level="title-lg text-center"
                  >
                    {product.name}
                  </Typography>
                  <Typography level="body-sm">
                    rating :{product.rating}
                  </Typography>
                </div>

                <CardContent orientation="horizontal">
              <div className="flex gap-[110px] ml-3 ">
                <Typography sx={{fontStyle:'italic' , fontSize:'20px'}}  level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Box sx={{ display: "flex" }}>
                <Button sx={{
                  color:'green', backgroundColor:'orange' ,fontWeight:'bold' }} >order now</Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 ,
                   }}
                >
                  Explore
                </Button>
              </Box>
            </CardContent>
              </Card>
            ))}
          </Box>
        </div>
      </Slider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          mt: 4,
          borderTop: "1px solid gray",
          // background: "#9a816a8f",
          pt: 3,
        }}
      >
        {products.map((product) => (
          <Card sx={{ width: 326 }}>
          <Link href={`/singlefood?id=${product.id}`}>
            <div className="text-center">
              <Typography sx={{display:'flex' , justifyContent:'center'}}>
                <img src={product.image} alt={products} />
              </Typography>
              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold" }}
                level="title-lg text-center"
              >
                {product.name}
              </Typography>
              <Typography level="body-sm">Rating :{product.rating}</Typography>
            </div>

            <CardContent orientation="horizontal">
              <div className="flex gap-[110px] ml-3 ">
                <Typography sx={{fontStyle:'italic' , fontSize:'20px'}}  level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Box sx={{ display: "flex" }}>
                <Button sx={{
                  color:'green', backgroundColor:'orange' ,fontWeight:'bold' }} >order now</Button>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 ,
                   }}
                >
                  Explore
                </Button>
              </Box>
            </CardContent>
          </Link>

          </Card>
        
        ))}
      </Box>
    </>
  );
};

export default Carousel;
