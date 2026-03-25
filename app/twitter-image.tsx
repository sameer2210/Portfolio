import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Sameer Khan portfolio card";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(120deg, #04071D 0%, #13162D 55%, #25284D 100%)",
          color: "white",
          padding: "64px",
        }}
      >
        <p style={{ fontSize: 24, textTransform: "uppercase", letterSpacing: 2, opacity: 0.75 }}>
          Sameer Khan
        </p>
        <h1 style={{ fontSize: 66, margin: "12px 0 8px", lineHeight: 1.05 }}>
          Full Stack Web Developer
        </h1>
        <p style={{ fontSize: 30, margin: 0, opacity: 0.9 }}>
          MERN Stack and Next.js Portfolio
        </p>
        <p style={{ fontSize: 22, marginTop: 22, opacity: 0.8 }}>{siteConfig.siteName}</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
