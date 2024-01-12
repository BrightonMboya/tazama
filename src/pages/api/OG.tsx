import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

//@ts-ignore
export default async function handler(req) {
  // const defaultOgImage = `${SUPABASE_BASE_URL}/OG/zambia.png`;
  const defaultOgImage =
    "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const { searchParams } = new URL(req.url);

  const hasDynamicOg = searchParams.has("ogUrl");

  const ogImage = hasDynamicOg
    ? // ? `${SUPABASE_BASE_URL}/OG/${searchParams.get("ogUrl")?.slice(0, 100)}.png`
      "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    : defaultOgImage;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover",
        }}
      >
        <img
          src={ogImage}
          alt="Og Image"
          // className="h-full w-full"
          width={1200}
          height={630}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
