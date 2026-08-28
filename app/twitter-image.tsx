import { ImageResponse } from "next/og";
import { siteConfig, siteUrl } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Sameer Khan - Full Stack Developer & Software Engineer Portfolio";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  const profileImageUrl = `${siteUrl}/sameer-pic.jpg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(120deg, #04071D 0%, #13162D 55%, #25284D 100%)",
          color: "white",
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "68%" }}>
          <p style={{ fontSize: 20, textTransform: "uppercase", letterSpacing: 3, color: "#C084FC", margin: 0 }}>
            Software Engineering Portfolio
          </p>
          <h1 style={{ fontSize: 58, margin: "10px 0 14px", lineHeight: 1.05, fontWeight: 800 }}>
            {siteConfig.name}
          </h1>
          <p style={{ fontSize: 26, margin: 0, opacity: 0.9 }}>
            Full Stack Developer | React · Next.js · Node.js · Java · AWS
          </p>
          <p style={{ fontSize: 20, marginTop: 20, color: "rgba(255, 255, 255, 0.7)" }}>
            https://portfolio-coral-two-16.vercel.app
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 230,
            height: 230,
            borderRadius: 115,
            padding: 6,
            background: "linear-gradient(135deg, #C084FC 0%, #7E22CE 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImageUrl}
            alt={siteConfig.name}
            style={{
              width: 218,
              height: 218,
              borderRadius: 109,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
