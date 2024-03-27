import React, { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import { Grid, Stack, Button, Checkbox } from "@mui/material";
import { InputPass, InputField } from "./index";
import { useState } from "react";

const fields = [
  { title: "Нэр", name: "name", placeHolder: "Нэрээ оруулна уу" },
  { title: "И-Мэйл", name: "email", placeHolder: "И-мэйл хаягаа оруулна уу" },
  { title: "Хаяг", name: "address", placeHolder: "Та хаягаа оруулна уу" },
];
const fieldForPassword = [
  { title: "Нууц үг", name: "password", placeHolder: "Нууц үгээ оруулна уу" },
  {
    title: "Нууц үг давтах",
    name: "password2",
    placeHolder: "Нууц үгээ оруулна уу",
  },
];

type stateType = {
  name: string;
  email: string;
  address: string;
  password: string;
  password2: string;
};
export const SignUpComp = () => {
  const [userdata, setUserdata] = useState<stateType>({
    name: "",
    email: "",
    address: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
    console.log(userdata);
  };

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      const emptyFields = Object.entries(userdata).filter(
        ([value]) => !value.trim()
      );
      if (emptyFields.length > 0) {
        setError("Please fill in all fields");
      } else {
        if (userdata.password !== userdata.password2) {
          setError("Passwords do not match");
        }
      }
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <Stack>
      <Grid
        padding={"74px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          sx={{
            width: "448px",
            padding: "32px",
            gap: "50px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              fontSize: "28px",
              fontWeight: "700px",
              fontFamily: "sans-serif",
            }}
          >
            Бүртгүүлэх
          </Box>
          <Grid
            sx={{
              marginTop: "50px",
            }}
          >
            {fields.map((field, index) => (
              <InputField
                key={index}
                placeHolder={field.placeHolder}
                text={field.title}
                name={field.name}
                onchange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
              />
            ))}
            {fieldForPassword.map((field, index) => (
              <InputPass key={index} text={field.title} name={field.name} />
            ))}
          </Grid>
          <Stack>
            {error && (
              <Box
                sx={{
                  position: "absolute",
                  textAlign: "center",
                  color: "red",
                  width: "100%",
                  fontFamily: "sans-serif",
                }}
              >
                {error}
              </Box>
            )}
          </Stack>
          <Stack sx={{ margin: "48px 0px 107px 0px" }}>
            <Box sx={{ fontFamily: "sans-serif" }}>
              <Checkbox />
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Box>
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                height: "48px",
                backgroundColor: "#18BA51",
                marginTop: "30px",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
