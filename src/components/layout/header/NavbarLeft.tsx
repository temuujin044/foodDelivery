import { Link, Stack, Typography } from "@mui/material";
import { useState } from "react";

export const NavbarLeft = () => {
  const [active, setActive] = useState<number>(1);
  const handleSubmit = (id: number) => {
    setActive(id);
  };
  const menu = [
    {
      id: 1,
      title: "НҮҮР",
      link: "/",
    },
    {
      id: 2,
      title: "ХООЛНЫ ЦЭС",
      link: "/menu",
    },
    {
      id: 3,
      title: "ХҮРГЭЛТИЙН БҮС",
      link: "/delzone",
    },
  ];
  return (
    <Stack
      direction="row"
      gap={1}
      fontSize="14px"
      fontWeight={700}
      alignItems={"center"}
      justifyItems={"center"}
    >
      {menu.map((e, key) => (
        <Link key={key} href={e.link} underline="none">
          <Typography
            fontSize="14px"
            fontWeight={700}
            px={2}
            py={1}
            onClick={() => handleSubmit(e.id)}
            sx={{
              color: active === e.id ? "#18BA51" : "black",
              cursor: "pointer",
            }}
          >
            {e.title}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};
