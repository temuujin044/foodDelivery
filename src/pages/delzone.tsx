import { DeliveryCard } from "@/components/card/DeliveryCard";
import { GreenStar } from "@/components/icons";
import { Container, Stack, Typography } from "@mui/material";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/delZone/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <Container>
      <Stack mb={"40px"}>
        <Stack>
          <Map />
        </Stack>
        <Stack py={2} direction={"row"} alignItems={"center"}>
          <GreenStar width={32} height={32} />
          <Typography variant="h2">Хүргэлтийн бүс дэх хаягууд</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <DeliveryCard title="А бүс" />
          <DeliveryCard title="Б бүс" />
        </Stack>
      </Stack>
    </Container>
  );
};
export default Page;
