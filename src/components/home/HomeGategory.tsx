import { Stack, Typography } from "@mui/material";
import { GreenStar } from "../icons";
import { Arrow } from "../icons";
import { CardModal } from "../card/CardModal";
import { useFoodData } from "@/context/FoodContext";
import Link from "next/link";

export const HomeCategory = ({ category }: { category: string }) => {
  const { foodData } = useFoodData();
  // console.log(foodData);
  return (
    <Stack width={"1200px"} justifyContent={"space-between"} gap={3}>
      <Stack
        py={2}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <GreenStar width={32} height={32} />
          <Typography fontWeight={700} fontSize={"22px"}>
            {category}
          </Typography>
        </Stack>
        <Link
          style={{ color: "#18BA51", textDecoration: "none" }}
          href={"/menu"}
        >
          <Stack gap="5px" direction={"row"} alignItems={"center"}>
            <Typography>Бүгдийг харах</Typography>
            <Arrow width={15} height={25} />
          </Stack>
        </Link>
      </Stack>
      {category == "Sale" ? (
        <Stack direction={"row"} justifyContent={"space-between"}>
          {/* filterdsen datag map guilgeed foodcard ruu yavuulna  */}
          {foodData
            .filter((item) => item.sale > 0)
            .slice(0, 4)
            .map((data, index) => {
              return <CardModal key={index} data={data} />;
            })}
        </Stack>
      ) : (
        <Stack direction={"row"} justifyContent={"space-between"}>
          {foodData
            .filter((item) => item.sale == 0)
            .filter((item) => item.category == category)
            .slice(0, 4)
            .map((data, index) => {
              // console.log("data:", data);
              return <CardModal key={index} data={data} />;
            })}
        </Stack>
      )}
    </Stack>
  );
};
