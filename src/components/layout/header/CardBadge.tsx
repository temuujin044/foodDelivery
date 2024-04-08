import { styled } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { Basket } from "@/components/icons";
import { useCartItems } from "@/context/CardContext";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartBadge = () => {
  const { cartFoods } = useCartItems();
  // let sum = 0;
  // cartFoods.forEach((num) => {
  //   sum += num.count;
  // });
  return (
    // <IconButton aria-label="cart">
    <StyledBadge badgeContent={cartFoods.length} color="primary">
      <Basket width={24} height={24} />
    </StyledBadge>
    // </IconButton>
  );
};
