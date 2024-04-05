import Layout from "@/components/layout/Layout";
import { CartContextProvider } from "@/context/CardContext";
import { FoodContextProvider } from "@/context/FoodContext";
import "@/styles/globals.css";
import { CustemThemeProvider } from "@/utils/CustemTheme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CartContextProvider>
      <FoodContextProvider>
        <CustemThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustemThemeProvider>
      </FoodContextProvider>
    </CartContextProvider>
  );
};
export default App;
