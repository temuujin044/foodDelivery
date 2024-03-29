import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const FoodCard = ({ data }) => {
  console.log("data:", data);
  return (
    <Card sx={{ width: "280px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.foodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
