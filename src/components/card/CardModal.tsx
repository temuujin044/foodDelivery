import React from "react";
import {
  Typography,
  CardMedia,
  Button,
  Modal,
  Box,
  Stack,
} from "@mui/material";
import { FoodCard } from "./FoodCard";
import { useCartItems } from "@/context/CardContext";
import { FoodType } from "@/utils/types";
// import { DrawerCard } from "./DrawerCard";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 981,
  height: 564,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
};
const buttonStyle = {
  maxWidth: "45px",
  maxHeight: "45px",
  minWidth: "45px",
  minHeight: "45px",
  color: "white",
  borderRadius: "10px",
};

export const CardModal = ({ data }: { data: FoodType }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [buyCount, setBuyCount] = React.useState(1);
  const { cartFoods, setCartFoods } = useCartItems();

  const sumHandler = () => setBuyCount(buyCount + 1);
  const subHandler = () => {
    const newCount = buyCount - 1;
    newCount < 1 ? setBuyCount(1) : setBuyCount(newCount);
  };
  const onSubmit = () => {
    setCartFoods([...cartFoods, { food: data, count: buyCount }]);
    handleClose();
  };
  // const salePrice =
  //   data.sale == 0 ? data.price : data.price - (data.price * data.sale) / 100;

  // console.log("cartData:", cartFoods);
  return (
    <>
      <Box onClick={handleOpen}>
        <FoodCard data={data} />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack sx={style} direction={"row"} gap={"33px"}>
          <Box width="500px" height="500px">
            <CardMedia
              component="img"
              width="500"
              height="500"
              image={data.imagePath}
              alt="green iguana"
            />
          </Box>

          <Stack gap={4} width={"380px"} justifyContent={"center"}>
            <Stack>
              <Typography fontSize={"28px"} fontWeight={700}>
                {data.foodName}
              </Typography>
              <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
                {data.sale == 0
                  ? data.price
                  : data.price - (data.price * data.sale) / 100}
                ₮
              </Typography>
            </Stack>
            <Stack gap={"12px"}>
              <Typography fontSize={"18px"} fontWeight={600}>
                Орц
              </Typography>
              <Typography
                bgcolor={"#F6F6F6"}
                borderRadius={"8px"}
                color={"#767676"}
                p={2}
              >
                {data.ingredients.map((e, index) =>
                  index === data.ingredients.length - 1 ? e : e + ", "
                )}
              </Typography>
            </Stack>
            <Typography fontSize={"18px"} fontWeight={600}>
              Тоо
            </Typography>
            <Stack
              gap={"20px"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Button onClick={subHandler} sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>-</Typography>
              </Button>
              <Typography py={1} px={"30px"} height={"40px"}>
                {buyCount}
              </Typography>
              <Button onClick={sumHandler} sx={buttonStyle} variant="contained">
                <Typography fontWeight={900}>+</Typography>
              </Button>
            </Stack>
            <Button
              onClick={onSubmit}
              disableRipple
              sx={{ color: "white" }}
              variant="contained"
            >
              Сагслах
            </Button>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
