import { getPosts } from "@/utils/get-posts";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const post = getPosts().find((post) => post.slug === slug);

  if (!post) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div
          className="flex h-full w-full bg-black border-4 border-emerald-500"
          style={{ borderColor: "rgb(16 185 129)", borderWidth: "4px" }}
        >
          I like Basketball
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
