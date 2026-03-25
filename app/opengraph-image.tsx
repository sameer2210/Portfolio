import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Sameer Khan portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top right, #CBACF9 0%, #1C1F3A 45%, #04071D 100%)",
          color: "white",
          padding: "72px",
        }}
      >
        <p
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Portfolio
        </p>
        <h1 style={{ fontSize: 76, margin: "14px 0 8px", lineHeight: 1.05 }}>
          {siteConfig.name}
        </h1>
        <p style={{ fontSize: 36, margin: 0, opacity: 0.95 }}>
          Full Stack Web Developer
        </p>
        <p style={{ fontSize: 24, marginTop: 22, opacity: 0.85 }}>
          MERN | Next.js | Scalable Web Apps
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
