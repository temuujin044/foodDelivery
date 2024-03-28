/* eslint-disable complexity */
import { Stack, Typography, InputAdornment } from "@mui/material";
import { OutlinedInput, FormControl } from "@mui/material";
import { IconButton, Button, useTheme } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import * as React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { SetPass } from "../password";

export const LoginComp = () => {
  const router = useRouter();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isInputFilled, setIsInputFilled] = React.useState(false);
  const [component, setComponent] = useState("login");
  const HandlerComponent = () => {
    setComponent("password");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsInputFilled(!!event.target.value && !!password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsInputFilled(!!event.target.value && !!email);
  };

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegister = () => {
    router.push("/signUp");
  };

  return (
    <Stack>
      <Stack display={`${component == "login" ? "none" : "flex"}`}>
        <SetPass />
      </Stack>
      <Stack
        display={`${component == "login" ? "flex" : "none"}`}
        padding={"32px"}
        borderRadius={"16px"}
        m={"111px 0px 75px 0px"}
        gap={"48px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h5">Нэвтрэх</Typography>

        <Stack>
          <FormControl sx={{ width: "384px", mb: "16px" }} variant="outlined">
            <Typography variant="h6" mb={"8px"}>
              Имэйл
            </Typography>

            <OutlinedInput
              sx={{ p: 0 }}
              placeholder="Имэйл хаягаа оруулна уу"
              id="outlined-adornment-weight"
              value={email}
              onChange={handleEmailChange}
            />
          </FormControl>
          <FormControl sx={{ width: "384px", mb: "8px" }} variant="outlined">
            <Typography variant="h6" mb={"8px"}>
              Нууц үг
            </Typography>
            <OutlinedInput
              placeholder="Нууц үг"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <Button onClick={() => HandlerComponent()} variant="text">
              <Typography color={"#3F4145"} variant="h6">
                Нууц үг сэргээх
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack gap={"32px"} alignItems={"center"}>
          <Button
            variant="outlined"
            onClick={handleSubmit}
            sx={{
              boxShadow: "none",
              borderRadius: "4px",
              backgroundColor: isInputFilled ? "#18BA51" : "#EEEFF2",
              "&:hover": { backgroundColor: "" },
              width: "384px",
              height: "48px",
              border: "none",
            }}
          >
            <Typography
              variant="h6"
              p={"9px"}
              color={isInputFilled ? "#fff" : "#1C20243D"}
            >
              Нэвтрэх
            </Typography>
          </Button>
          <Typography variant="h6">Эсвэл</Typography>

          <Button
            variant="outlined"
            onClick={handleRegister}
            sx={{ borderRadius: "4px", width: "384px", height: "48px" }}
          >
            <Typography
              variant="h6"
              p={"9px"}
              color={theme.palette.primary.dark}
            >
              Бүртгүүлэх
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
