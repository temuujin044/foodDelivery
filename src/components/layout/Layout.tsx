import { Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack width={"100vw"} justifyContent={"center"} alignSelf={"center"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Stack>
  );
};
export default Layout;
