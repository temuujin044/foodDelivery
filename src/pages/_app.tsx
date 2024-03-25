import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { CustemThemeProvider } from "@/utils/CustemTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustemThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustemThemeProvider>
  );
};
export default App;
