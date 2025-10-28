import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt = `${siteConfig.name} — Local Snow Shoveling`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #4DA6FF 0%, #003366 100%)",
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <div
            style={{
              fontSize: 120,
              marginBottom: 20,
            }}
          >
            ❄️
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              marginBottom: 20,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 40,
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255, 255, 255, 0.8)",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Port Huron & St. Clair County
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}


