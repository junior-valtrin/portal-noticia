import { AppProps } from "next/app";
import Layout from "../components/layout";
import { CssBaseline } from "@mui/material";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
}
