import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, useTheme } from "@mui/material";
import { Profile } from "@/components/icons";
import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, Stack } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #DADCE0 ",
  p: 4,
};

export const LoginModal = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isInputFilled, setIsInputFilled] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsInputFilled(!!event.target.value && !!password);
  };
  const handleSubmit = () => {
    console.log({ password, email });
  };

  return (
    <div>
      <Stack>
        <Button sx={{ gap: "12px" }} onClick={handleOpen}>
          <Profile width={18} height={18} />
          <Typography fontSize="14px" fontWeight={700}>
            Нэвтрэх
          </Typography>
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Stack gap={"48px"} borderRadius={"16px"} sx={style}>
            <Stack alignItems={"center"}>
              <Typography variant="h5">Нэвтрэх</Typography>
            </Stack>
            <Stack>
              <FormControl
                sx={{ width: "384px", mb: "16px" }}
                variant="outlined"
              >
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
              <Typography variant="h6" mb={"8px"}>
                Нууц үг
              </Typography>
              <OutlinedInput
                sx={{ width: "384px" }}
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
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Stack direction={"row"} justifyContent={"flex-end"}>
                <Button variant="text">
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
        </Modal>
      </Stack>
    </div>
  );
};
