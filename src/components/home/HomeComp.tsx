import { Stack, Typography, Box, useTheme } from "@mui/material";
import Image from "next/image";
import { Book, GreenStar, Time, Vegi } from "../icons";

export const HomeComp = () => {
  const theme = useTheme();
  const info = [
    {
      icon: <Book width={30} height={30} />,
      title: "Хүргэлтийн төлөв хянах",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <Time width={30} height={30} />,
      title: "Шуурхай хүргэлт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <Vegi width={30} height={30} />,
      title: "Эрүүл, баталгаат орц",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <Book width={30} height={30} />,
      title: "Хоолны өргөн сонголт",
      desc: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <Stack>
      <Stack
        direction={"row"}
        height={"788px"}
        width={"100vw"}
        bgcolor={"#18BA51"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"384px"}>
          <Typography color={theme.palette.primary.light} variant="h1">
            Pinecone
            <br /> Food delivery
          </Typography>
          <Box m={"23px 0px 23px 0px"} border={1} borderColor={"white"}></Box>
          <Typography variant="subtitle1" color={theme.palette.primary.light}>
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Stack position={"relative"}>
          <Box marginLeft={"258px"}>
            <Image
              width={443}
              height={443}
              src={"/image13homefood1.png"}
              alt=""
            />
          </Box>
          <Box>
            <Image
              style={{
                position: "absolute",
                top: 100,
                left: 270,
                marginTop: "20px",
                marginLeft: "260px",
              }}
              width={313}
              height={313}
              src={"/image 14.png"}
              alt=""
            />
          </Box>
        </Stack>
      </Stack>
      <Stack
        width={"1200px"}
        direction={"row"}
        alignSelf={"center"}
        justifyContent={"space-between"}
        my={"122px"}
      >
        {info.map((e, index) => (
          <Stack
            width={"265px"}
            key={index}
            border={1}
            borderColor={"#D6D8DB"}
            borderRadius={2}
            p={2}
            gap={"15px"}
            color={"#272727"}
            justifyContent={"space-between"}
            sx={{ boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.10)" }}
          >
            <Box p={"15px"}>{e.icon}</Box>
            <Stack gap={1}>
              <Box fontWeight={700} fontSize={"18px"}>
                {e.title}
              </Box>
              <Box sx={{ opacity: 0.75 }} fontSize={"14px"}>
                {e.desc}
              </Box>
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Stack alignItems={"center"}>
        <Stack width={"1200px"}>
          <GreenStar width={32} height={32} />
          <Typography></Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
