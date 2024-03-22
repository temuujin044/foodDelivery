import { Stack } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
    // sx={{
    //   minHeight: "100vh",
    //   justifyContent: "space-between",
    // }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Stack>
  );
};
export default Layout;
