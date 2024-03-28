import { Button, Stack, Typography, useTheme } from "@mui/material";
import { FormControl, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { NewPass } from ".";

export const SetPass = () => {
  const theme = useTheme();
  const [filled, setFilled] = useState(false);
  const [email, setEmail] = useState("");
  const [component, setComponent] = useState("SetPass");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setFilled(!!e.target.value && !!email);
  };
  const handleSubmit = () => {
    setComponent("NewPass");
    console.log({ email });
  };

  return (
    <Stack padding={"87px 0px 130px 0px"}>
      <Stack display={`${component == "SetPass" ? "none" : "flex"}`}>
        <NewPass />
      </Stack>
      <Stack
        display={`${component == "SetPass" ? "flex" : "none"}`}
        p={"32px"}
        gap={"48px"}
        alignItems={"center"}
      >
        <Typography color={theme.palette.primary.dark} variant="h5">
          Нууц үг сэргээх
        </Typography>
        <form>
          <Typography pb={"4px"} variant="h6">
            Имэйл
          </Typography>
          <FormControl
            sx={{ bgcolor: "#F7F7F8", width: "384px", height: "56px" }}
          >
            <OutlinedInput
              value={email}
              onChange={handleEmail}
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>
        </form>
        <Button
          onClick={handleSubmit}
          variant="outlined"
          sx={{
            backgroundColor: filled ? "#18BA51" : "#EEEFF2",
            width: "384px",
            height: "48px",
          }}
        >
          <Typography color={filled ? "#fff" : "#1C20243D"} variant="h4">
            Үргэлжлүүлэх
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
};
