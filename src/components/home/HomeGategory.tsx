import { Stack, Typography } from "@mui/material";
import { GreenStar, Arrow } from "../icons";

export const HomeGategory = ({ category }: { category: string }) => {
  return (
    <Stack alignItems={"center"}>
      <Stack>
        <GreenStar width={32} height={32} />
        <Typography>{category}</Typography>
      </Stack>
      <Stack>
        <Typography>Бүгдийг харах</Typography>
        <Arrow width={15} height={30} />
      </Stack>
    </Stack>
  );
};
