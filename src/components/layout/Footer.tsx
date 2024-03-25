import { Stack, Box, Typography, useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { PineconeWhite } from "../icons/PineconeWhite";
import { Facebook, Instagram, Twitter } from "../icons";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"40px"}
      padding={"114px "}
      height={"545px"}
      bgcolor={"#18BA51"}
      alignItems={"center"}
    >
      <Stack justifyContent={"center"} gap={"8px"} direction={"row"}>
        <PineconeWhite width={31} height={26} />
        <Typography variant="h2" color={theme.palette.primary.light}>
          Food Delivery
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography
          display={"flex"}
          width={"1200px"}
          justifyContent={"space-between"}
          variant="h3"
        >
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Нүүр
          </Link>
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Холбоо барих
          </Link>
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Хоолны цэс
          </Link>
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Үйлчилгээний нөхцөл
          </Link>
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Хүргэлтийн бүс
          </Link>
          <Link href="#" underline="always" color={theme.palette.primary.light}>
            Нууцлалын бодлого
          </Link>
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={"18px"}>
        <Facebook width={40} height={46} />
        <Instagram width={40} height={46} />
        <Twitter width={40} height={46} />
      </Stack>
      <Stack width={"1200px"} height={"1px"} bgcolor={"#fff"}>
        <Typography
          mt={"40px"}
          variant="h4"
          color={theme.palette.primary.light}
          textAlign={"center"}
        >
          © 2024 Pinecone Foods LLC <br /> Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Stack>
    </Box>
  );
};
