import { Box, Stack, Typography } from "@mui/material";

export const DeliveryCard = ({ title }: { title: string }) => {
  return (
    <Stack
      p={3}
      gap={2}
      width={"568px"}
      height={"388px"}
      sx={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)" }}
      border={0}
      borderRadius={2}
    >
      <Box borderBottom={1} borderColor={"#18BA51"} py={2}>
        <Typography fontWeight={600} fontSize={"20px"}>
          {title}
        </Typography>
      </Box>
      <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
        <Stack width={"262px"} gap={2}>
          <Typography>ada</Typography>
        </Stack>
        <Stack width={"262px"} gap={2}>
          <Typography>dad</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
