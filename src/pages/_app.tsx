import type { AppProps, AppType } from "next/app";
import Layout from "~/components/ui/Layout";
import { api } from "~/lib/api";
import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";
import { env } from "~/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  // checks that we are client-side
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (posthog) => {
      if (env.NODE_ENV === "development") posthog.debug(); // debug mode in development
    },
  });
}

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PostHogProvider client={posthog}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </PostHogProvider>
  );
};

export default api.withTRPC(MyApp);
