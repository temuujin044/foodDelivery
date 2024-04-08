import { Box, InputBase, alpha, styled } from "@mui/material";
import { SearchIcon } from "@/components/icons";

export const SearchInput = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Box width={260} height={40}>
      <Search sx={{ border: 1, borderColor: "black" }}>
        <SearchIconWrapper>
          <SearchIcon width={18} height={18} />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Хайх" />
      </Search>
    </Box>
  );
};
