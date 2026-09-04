import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const alt = `${siteConfig.brand.name} — ${siteConfig.event.edition}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#F1EEE7",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid rgba(198,161,91,0.28)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#C6A15B",
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {siteConfig.event.edition}
          </div>
          <div
            style={{
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The Ambition</span>
            <span>Room</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              width: 120,
              height: 1,
              background: "#C6A15B",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "#F1EEE7",
              display: "flex",
            }}
          >
            {siteConfig.brand.tagline}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#A7A39A",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              display: "flex",
            }}
          >
            {siteConfig.event.dateDisplay} · {siteConfig.event.city},{" "}
            {siteConfig.event.region}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
