import { FoodCard } from "@/components/card/FoodCard";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
const Page = () => {
  interface FoodData {
    id: number;
    category: string;
    foodName: string;
    imagePath: string;
    ingredients: string[];
    price: number;
    sale: number;
    stock: number;
  }
  const [foodData, setFoodData] = useState<FoodData[]>([]);

  useEffect(() => {
    fetch("./DummyFood.json")
      .then((res) => res.json())
      .then((data: FoodData[]) => {
        setFoodData(data);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, []);

  console.log("FoodData:", foodData);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Stack
        width={"1200px"}
        justifyContent={"space-between"}
        direction={"row"}
        flexWrap={"wrap"}
      >
        {foodData.map((data, index) => {
          // console.log(data);
          return <FoodCard data={data} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};
export default Page;
