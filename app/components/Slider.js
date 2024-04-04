import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
const Carousel = ({ slides }) => {
  const [products, setProducts] = useState([]);
  console.log(products , 'productsproducts')
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    pauseOnHover: true, 
  };
  const slidercard = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
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
        
        setProducts(data.recipes
          );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <Slider {...settings}>
      <div className="mt-[30px]">
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Card sx={{ width: 326 }}>
            <div>
              <Typography
                sx={{ background: "red", height: "200px", width: "100%" }}
              ></Typography>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            </div>

            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ width: 326 }}>
            <div>
              <Typography
                sx={{ background: "red", height: "200px", width: "100%" }}
              ></Typography>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            </div>

            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>{" "}
          <Card sx={{ width: 326 }}>
            <div>
              <Typography
                sx={{ background: "red", height: "200px", width: "100%" }}
              ></Typography>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            </div>

            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>{" "}
          <Card sx={{ width: 326 }}>
            <div>
              <Typography
                sx={{ background: "red", height: "200px", width: "100%" }}
              ></Typography>
              <Typography level="title-lg">Yosemite National Park</Typography>
              <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            </div>

            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  $2,900
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div>
        <div className="mt-[30px]">
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <Card sx={{ width: 326 }}>
              <div>
                <Typography sx={{ height: "200px", width: "100%" }}>
                  <Slider {...slidercard}>
                    <div >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 3,
                        }}
                      >
                        <Card sx={{ width: 326 }}>
                          <div>
                            <Typography
                              sx={{
                                background: "red",
                                height: "200px",
                                width: "100%",
                              }}
                            ></Typography>
                            </div>
                        </Card>
                        
                      </Box>
                    </div>
                    <div>
                    <div >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 3,
                        }}
                      >
                        <Card sx={{ width: 326 }}>
                          <div>
                            <Typography
                              sx={{
                                background: "green",
                                height: "200px",
                                width: "100%",
                              }}
                            ></Typography>
                            </div>
                        </Card>
                        
                      </Box>
                    </div>
                    </div>
                    <div>
                    <div >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 3,
                        }}
                      >
                        <Card sx={{ width: 326 }}>
                          <div>
                            <Typography
                              sx={{
                                background: "blue",
                                height: "200px",
                                width: "100%",
                              }}
                            ></Typography>
                            </div>
                        </Card>
                        
                      </Box>
                    </div>
                    </div>
                  </Slider>
                </Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>{" "}
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>{" "}
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
      <div>
        <div className="mt-[30px]">
          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>{" "}
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>{" "}
            <Card sx={{ width: 326 }}>
              <div>
                <Typography
                  sx={{ background: "red", height: "200px", width: "100%" }}
                ></Typography>
                <Typography level="title-lg">Yosemite National Park</Typography>
                <Typography level="body-sm">
                  April 24 to May 02, 2021
                </Typography>
              </div>

              <CardContent orientation="horizontal">
                <div>
                  <Typography level="body-xs">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Box>
        </div>
      </div>
      {/* Add more slides here */}
    </Slider>
  );
};

export default Carousel;
