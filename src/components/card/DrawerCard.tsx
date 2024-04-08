import { useCartItems } from "@/context/CardContext";
import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";

const buttonStyle = {
  maxWidth: "45px",
  maxHeight: "40px",
  minWidth: "45px",
  minHeight: "40px",
  color: "white",
  borderRadius: "10px",
};
export const DrawerCard = () => {
  const { cartFoods } = useCartItems();
  // console.log("drawCard:", cartFoods);
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      {cartFoods.map((data, index) => (
        <Stack
          borderTop={1}
          borderColor={"#D6D8DB"}
          p={2}
          key={index}
          gap={2}
          direction={"row"}
          width={"538px"}
        >
          <Box width={"50%"}>
            <CardMedia
              component="img"
              width="245"
              height="150"
              image={data.imagePath}
              alt="green iguana"
            />
          </Box>
          <Stack
            justifyContent={"space-between"}
            width={"50%"}
            height={"150px"}
          >
            <Typography fontSize={"18px"} fontWeight={600}>
              {data.foodName}
            </Typography>
            <Typography color={"#18BA51"} fontWeight={600} fontSize={"18px"}>
              {data.price}₮
            </Typography>
            <Typography color={"#767676"}>{data.ingredients}</Typography>
            <Stack gap={1} direction={"row"} alignItems={"center"}>
              <Button sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>-</Typography>
              </Button>
              <Typography py={1} px={"30px"} height={"40px"}>
                {data.count}
              </Typography>
              <Button sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>+</Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
