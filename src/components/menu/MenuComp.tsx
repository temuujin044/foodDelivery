import { Button, Stack, Typography } from "@mui/material";
import { CardModal } from "../card";
import { useState } from "react";
import { useFoodData } from "@/context/FoodContext";

export const MenuComp = () => {
  const { foodData } = useFoodData();
  const [menu, setMenu] = useState("Breakfast");
  const buttonStyle = (category: string) => ({
    "&.MuiButtonBase-root:hover": {
      backgroundColor: menu === category ? "primary.main" : "white",
      boxShadow: "none",
    },
    boxShadow: "none",
    border: 1,
    borderColor: "#D6D8DB",
    borderRadius: "8px",
    padding: "8px 16px",
    width: 270,
    color: menu === category ? "white" : "black",
    backgroundColor: menu === category ? "primary.main" : "white",
  });
  const menuTitles = [
    "Breakfast",
    "Salads and Appetizers",
    "Main Dish",
    "Dessert",
  ];
  return (
    <Stack width={"1200px"}>
      <Stack
        my={"32px"}
        direction={"row"}
        justifyContent={"space-between"}
        gap={"26px"}
      >
        {menuTitles.map((category, index) => (
          <Button
            key={index}
            disableRipple
            variant="contained"
            sx={buttonStyle(category)}
            onClick={() => setMenu(category)}
          >
            <Typography
              fontSize={"16px"}
              fontWeight={500}
              sx={{ textTransform: "none" }}
            >
              {category}
            </Typography>
          </Button>
        ))}
      </Stack>
      <Stack mt={"54px"} mb={"80px"} gap={"60px"}>
        <Stack gap={3} direction={"row"} flexWrap={"wrap"}>
          {foodData
            .filter((item) => item.category == menu)
            .map((data, index) => (
              <CardModal key={index} data={data} />
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
