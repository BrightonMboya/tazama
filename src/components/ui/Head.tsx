import Head from "next/head";

export default function HeadSEO() {
  return (
    <Head>
      {/* Basics */}
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />

      {/* keywords tags */}
      <meta
        name="keywords"
        content="african luxury safaris, kilimanjaro, zanzibar, serengeti plains, Saadan national park, tarangire, manyara national park"
      />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Open Graph stuff */}
      <meta
        property="og:image"
        content={`https://www.tazamaafricasafaris.com/api/OG`}
      />

      <meta property="og:site_name" content="Tazama Africa Tours and Safaris" />
      <meta property="og:title" content="Tazama Africa Tours and Safaris" />
      <meta property="og:url" content="https://www.tazamaafricasafari.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime."
      />

      <meta name="twitter:title" content="Tazama Africa Tours and Safaris" />
      <meta name="twitter:url" content="https://www.tazamaafricasafari.com" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:description"
        content="Helping you design the safari of your dreams. Tazama Africa designs unique travel experiences throughout East Africa, giving you the trip of a lifetime."
      />
      <meta
        name="description"
        content="Helping you design the safari of your dreams. Tazama Africa designs unique
            travel experiences throughout East Africa, giving you the trip of a
            lifetime."
      />
      <meta name="googlebot" content="notranslate" />
      <meta name="google" content="nopagereadaloud" />
      <meta name="robots" content="index, follow" />
      <title>Tazama Africa Tours and Safaris</title>
    </Head>
  );
}
