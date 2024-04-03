import { Container, Link, Stack, Typography } from "@mui/material";
import { GreenStar } from "../icons";
import { Arrow } from "../icons";
import { CardModal } from "../card/CardModal";
import { useFoodData } from "@/context/foodContext";
export const HomeCategory = ({ category }: { category: string }) => {
  const { foodData } = useFoodData();
  console.log(foodData);
  return (
    <Container>
      <Stack justifyContent={"space-between"} gap={3}>
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
          <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
            <Stack gap="5px" direction={"row"} alignItems={"center"}>
              <Typography>Бүгдийг харах</Typography>
              <Arrow width={15} height={25} />
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};
