import * as React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Pinecone } from "@/components/icons";
import { SearchInput } from "./SearchInput";
import { NavbarLeft } from "./NavbarLeft";
import { BasketDrawer } from "@/drawer/BasketDrawer";
import { LoginModal } from "./loginModal";
import { useState } from "react";
import { useTheme } from "@mui/material";
export const Header = () => {
  const theme = useTheme();
  const gg = [
    {
      id: 6,

      title: (
        <>
          <LoginModal />
        </>
      ),
    },
  ];
  const [color, setColor] = useState<number>(1);
  const handlerCol = (id: number) => {
    setColor(id);
  };
  return (
    <Container>
      <Stack alignItems={"center"} justifyItems={"center"}>
        <Stack
          width="1200px"
          height="57px"
          direction="row"
          px={3}
          py={1}
          justifyContent="space-between"
        >
          <Stack direction={"row"} alignItems="center" gap={3}>
            <Box width="41px" height="41px" px="4.87px" py="7.18px">
              <Pinecone width={40} height={40} />
            </Box>
            <NavbarLeft />
          </Stack>
          <Stack direction="row" gap={2}>
            <SearchInput />
            <Stack
              direction="row"
              px={2}
              py={1}
              alignItems={"center"}
              sx={{
                cursor: "pointer",
              }}
            >
              <BasketDrawer />
              <Typography fontSize="14px" fontWeight={700}>
                Сагс
              </Typography>
            </Stack>

            {gg.map((gg, key) => (
              <Stack justifyContent={"center"} alignItems={"center"} key={key}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  onClick={() => handlerCol(gg.id)}
                  sx={{
                    my: 2,
                    color:
                      color === gg.id
                        ? theme.palette.primary.main
                        : theme.palette.primary.dark,
                    cursor: "pointer",
                  }}
                >
                  <Typography> {gg.title}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
