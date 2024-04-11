import { styled } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { Basket } from "@/components/icons";
import { useCartItems } from "@/context/CardContext";
import { Typography } from "@mui/material";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 48,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const CartBadge = () => {
  const { cartFoods } = useCartItems();

  return (
    <StyledBadge
      sx={{ direction: "flex", alignItems: "center" }}
      badgeContent={cartFoods.length}
      color="primary"
    >
      <Basket width={24} height={24} />
      <Typography
        sx={{
          marginLeft: "12px",
        }}
        fontSize="14px"
        fontWeight={700}
      >
        Сагс
      </Typography>
    </StyledBadge>
  );
};
