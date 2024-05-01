import type { AppType } from "next/app";
import Layout from "~/components/ui/Layout";
import { api } from "~/lib/api";
import { Analytics } from "@vercel/analytics/react";
import { Raleway } from "next/font/google";

import "~/styles/globals.css";
import { env } from "~/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

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
    <React.Fragment>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${raleway.variable};
          }
        `}
      </style>
      <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GOOGLE_TAG_ID} />
      <SpeedInsights />
      <PostHogProvider client={posthog}>
        <main className={`${raleway.variable}`}>
          <Layout>
            <Component {...pageProps} />
            <Analytics />
          </Layout>
        </main>
      </PostHogProvider>
    </React.Fragment>
  );
};

export default api.withTRPC(MyApp);
