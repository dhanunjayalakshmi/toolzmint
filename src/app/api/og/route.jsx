import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Toolzmint";
  const description =
    searchParams.get("description") ?? "Free online tools for developers";

  const truncatedDesc =
    description.length > 110 ? description.slice(0, 110) + "…" : description;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "60px 72px",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              backgroundColor: "rgba(129,140,248,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: "700",
              color: "#818cf8",
            }}
          >
            T
          </div>
          <span style={{ fontSize: "22px", fontWeight: "600", color: "#94a3b8" }}>
            Toolzmint
          </span>
        </div>

        {/* Title + description */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <p
            style={{
              fontSize: title.length > 28 ? "54px" : "66px",
              fontWeight: "700",
              color: "#f1f5f9",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              margin: 0,
              lineHeight: "1.5",
            }}
          >
            {truncatedDesc}
          </p>
        </div>

        {/* Footer */}
        <p style={{ fontSize: "18px", color: "#475569", margin: 0 }}>
          toolzmint.com · Free · No install · Runs in your browser
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
