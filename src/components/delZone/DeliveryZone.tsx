import { DeliveryCard } from "../card/DeliveryCard";
import { GreenStar } from "../icons";
import { Container, Stack, Typography } from "@mui/material";
import Map from "./Map";
export const DeliveryZone = () => {
  return (
    <Container>
      <Stack>
        <Stack>
          <Map />
        </Stack>
        <Stack py={2} direction={"row"} alignItems={"center"}>
          <GreenStar width={32} height={32} />
          <Typography fontWeight={700} fontSize={"22px"}>
            Хүргэлтийн бүс дэх хаягууд
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <DeliveryCard title="А бүс" />
          <DeliveryCard title="Б бүс" />
        </Stack>
      </Stack>
    </Container>
  );
};
