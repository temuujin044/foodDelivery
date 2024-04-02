import { Stack, Typography } from "@mui/material";
import { GreenStar, Arrow } from "../icons";

export const HomeGategory = ({ category }: { category: string }) => {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Stack direction={"row"}>
        <GreenStar width={32} height={32} />
        <Typography>{category}</Typography>
      </Stack>
      <Stack direction={"row"}>
        <Typography>Бүгдийг харах</Typography>
        <Arrow width={15} height={30} />
      </Stack>
    </Stack>
  );
};
