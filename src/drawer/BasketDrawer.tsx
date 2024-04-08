import { Button, Drawer, Stack, Typography } from "@mui/material";
import * as React from "react";
import { CartBadge } from "@/components/layout/header/CardBadge";
import { LeftArrow } from "@/components/icons";
import { DrawerCard } from "@/components/card/DrawerCard";
import { useCartItems } from "@/context/CardContext";

export const BasketDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const { cartFoods } = useCartItems();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  let sum = 0;
  cartFoods.forEach((num) => {
    sum += num.price * num.count;
  });
  const DrawerList = (
    <Stack
      minHeight={"100vh"}
      sx={{ width: 586 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack>
        <Stack
          direction={"row"}
          width={"538px"}
          gap={"171px"}
          alignItems={"center"}
          mb={"30px"}
        >
          <Stack
            px={"6px"}
            py={"2px"}
            width={"48px"}
            height={"48px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LeftArrow width={12} height={20} />
          </Stack>
          <Typography fontSize={"20px"} fontWeight={900}>
            Таны сагс
          </Typography>
        </Stack>
        <DrawerCard />
      </Stack>
      <Stack
        borderTop={1}
        borderColor={"#D6D8DB"}
        px={4}
        py={"10px"}
        width={"586px"}
        height={"172px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography color={"#5E6166"} fontSize={"18px"}>
            Нийт төлөх дүн
          </Typography>
          <Typography fontSize={"18px"} fontWeight={700}>
            {sum}₮
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{ color: "white", width: "256px", height: "48px" }}
        >
          Захиалах
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <CartBadge />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
