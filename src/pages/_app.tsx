import type { AppProps, AppType } from "next/app";
import Layout from "~/components/ui/Layout";
import { api } from "~/lib/api";
import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
