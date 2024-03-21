import { Button, Stack } from "@mui/material";
import { Pinecone } from "./icons";

export const Header = () => {
  return (
    <Stack>
      <Stack direction={"row"}>
        <Pinecone width={40} height={40} />
        <Button>НҮҮР</Button>
        <Button>ХООЛНЫ ЦЭС</Button>
        <Button>ХҮРГЭЛТИЙН БҮС</Button>
      </Stack>
    </Stack>
  );
};
