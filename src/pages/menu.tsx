import { FoodCard } from "@/components/card/FoodCard";
import { Container, Stack } from "@mui/material";
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

  console.log("FOodData:", foodData);
  return (
    <Container>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {" "}
        {foodData.map((data, index) => {
          // console.log(data);
          return <FoodCard data={data} key={index} />;
        })}
      </Stack>
    </Container>
  );
};
export default Page;
