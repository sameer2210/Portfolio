import { ImageResponse } from "next/og";
import { siteConfig, siteUrl } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Sameer Khan - Full Stack Developer & Software Engineer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #04071D 0%, #0C0E23 50%, #161A31 100%)",
          color: "white",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left Column: Personal Branding & Role */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "65%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#C084FC",
                backgroundColor: "rgba(192, 132, 252, 0.12)",
                padding: "6px 16px",
                borderRadius: 20,
                border: "1px solid rgba(192, 132, 252, 0.3)",
              }}
            >
              Full Stack Developer &amp; Software Engineer
            </span>
          </div>

          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              margin: "8px 0 16px 0",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            {siteConfig.name}
          </h1>

          <p
            style={{
              fontSize: 26,
              margin: 0,
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.4,
            }}
          >
            Engineering scalable web &amp; mobile systems with React, Next.js, Node.js, NestJS, Java &amp; AWS.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
            }}
          >
            {["React", "Next.js", "Node.js", "Java", "AWS", "Docker"].map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: 16,
                  color: "#E9D5FF",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Profile Picture Showcase */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 260,
            height: 260,
            borderRadius: 130,
            padding: 8,
            background: "linear-gradient(135deg, #C084FC 0%, #7E22CE 100%)",
            boxShadow: "0 20px 50px rgba(168, 85, 247, 0.35)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImageUrl}
            alt={siteConfig.name}
            style={{
              width: 244,
              height: 244,
              borderRadius: 122,
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
