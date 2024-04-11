import { Button, Stack, Typography, FormControl } from "@mui/material";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";

export const NewPass = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email] = React.useState("");
  // eslint-disable-next-line no-unused-vars
  const [isInputFilled, setIsInputFilled] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsInputFilled(!!event.target.value && !!email);
  };

  return (
    <Stack gap={"48px"} p={"32px"} alignItems={"center"}>
      <Typography variant="h5">Нууц үг сэргээх</Typography>
      <FormControl sx={{ width: "384px", mb: "8px" }} variant="outlined">
        <Typography variant="h6" mb={"8px"}>
          Нууц үг сэргээх код
        </Typography>
        <OutlinedInput
          placeholder="*********"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="outlined"
        sx={{
          width: "384px",
          height: "48px",
        }}
      >
        <Typography variant="h4">Үргэлжлүүлэх</Typography>
      </Button>
    </Stack>
  );
};
