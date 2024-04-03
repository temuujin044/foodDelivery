import { Stack, Typography } from "@mui/material";
import { GreenStar, Arrow } from "../icons";

export const HomeGategory = ({ category }: { category: string }) => {
  return (
    <Stack
      padding={"16px  0px  16px 0px"}
      direction={"row"}
      alignItems={"center"}
      gap={"900px"}
    >
      <Stack direction={"row"}>
        <GreenStar width={32} height={32} />
        <Typography fontSize={"22px"} fontWeight={700}>
          {category}
        </Typography>
      </Stack>
      <Stack gap={"5px"} alignItems={"center"} direction={"row"}>
        <Typography variant="h4" color={"#18BA51"}>
          Бүгдийг харах
        </Typography>
        <Arrow width={15} height={30} />
      </Stack>
    </Stack>
  );
};
