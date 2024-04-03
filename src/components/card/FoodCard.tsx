import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Stack } from "@mui/material";

interface data {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

export const FoodCard = ({ data }: { data: data }) => {
  console.log("data:", data);
  return (
    <Card
      sx={{
        width: 282,
        height: 256,
        boxShadow: 0,
        marginBottom: "60px",
      }}
    >
      <CardActionArea disableRipple>
        <CardMedia
          sx={{ borderRadius: "16px" }}
          component="img"
          width="282"
          height="186"
          image={data.imagePath}
          alt="green iguana"
        />
        {data.sale > 0 ? (
          <Box
            p="4px 16px"
            borderRadius={"16px"}
            bgcolor={"#18BA51"}
            position={"absolute"}
            top={"15px"}
            right={"15px"}
            border={1}
            borderColor={"white"}
          >
            <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
              {data.sale + "%"}
            </Typography>
          </Box>
        ) : (
          <Stack></Stack>
        )}

        <CardContent sx={{ pt: "14px", px: 0, pb: 0 }}>
          <Typography variant="subtitle2">{data.foodName}</Typography>
          {data.sale > 0 ? (
            <Stack direction={"row"} gap={2}>
              <Typography variant="subtitle2" color={"#18BA51"}>
                {data.price - (data.price * data.sale) / 100}₮
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textDecoration: "line-through" }}
              >
                {data.price}₮
              </Typography>
            </Stack>
          ) : (
            <Typography variant="subtitle2" color={"#18BA51"}>
              {data.price}₮
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
