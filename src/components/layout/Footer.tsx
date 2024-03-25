import { Container, Stack, Box, Typography, useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { PineconeWhite } from "../icons/PineconeWhite";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box gap={"40px"} padding={"114px "} height={545} bgcolor={"#18BA51"}>
      <Container>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={"8px"}
          direction={"row"}
        >
          <PineconeWhite width={31} height={26} />
          <Typography variant="h2" color={theme.palette.primary.light}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack justifyContent={"space-between"}>
          <Typography variant="h3">
            <Link href="#" underline="none" color={theme.palette.primary.light}>
              Нүүр
            </Link>
            <Link
              href="#"
              underline="always"
              color={theme.palette.primary.light}
            >
              Холбоо барих
            </Link>
            <Link
              href="#"
              underline="always"
              color={theme.palette.primary.light}
            >
              Хоолны цэс
            </Link>
            <Link
              href="#"
              underline="always"
              color={theme.palette.primary.light}
            >
              Үйлчилгээний нөхцөл
            </Link>
            <Link
              href="#"
              underline="always"
              color={theme.palette.primary.light}
            >
              Хүргэлтийн бүс
            </Link>
            <Link
              href="#"
              underline="always"
              color={theme.palette.primary.light}
            >
              Нууцлалын бодлого
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
