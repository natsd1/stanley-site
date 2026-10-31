import { ImageResponse } from "next/og";

export const alt = "Stanley — Social Media Manager, Web3 Growth & Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          color: "#f2f2ec",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#c9f23a",
              color: "#0b0b0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>Stanley</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95 }}>From timeline</div>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95, color: "#c9f23a" }}>
            to userbase.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a39b" }}>
          <div>Social Media Manager · Web3 Growth & Community</div>
          <div>@DeFi_Senseii</div>
        </div>
      </div>
    ),
    size,
  );
}
