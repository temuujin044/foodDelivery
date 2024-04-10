import * as React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Pinecone } from "@/components/icons";
import { SearchInput } from "./SearchInput";
import { NavbarLeft } from "./NavbarLeft";
import { BasketDrawer } from "@/drawer/BasketDrawer";
import { LoginModal } from "./LoginModal";

export const Header = () => {
  const modal = [
    {
      id: 1,

      title: (
        <>
          <LoginModal />
        </>
      ),
    },
  ];
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
            <Stack
              alignItems="center"
              width="45px"
              height="45px"
              px="4.87px"
              py="7.18px"
            >
              <Pinecone width={40} height={40} />
            </Stack>
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
            </Stack>

            {modal.map((modal, key) => (
              <Stack justifyContent={"center"} alignItems={"center"} key={key}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {modal.title}
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
