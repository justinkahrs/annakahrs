import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          position: "relative",
          overflow: "hidden",
          background: "#f1edff",
          color: "#18181b",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(92% 56% at 50% 100%, rgba(255,94,64,0.22), rgba(255,94,64,0.08) 34%, rgba(186,255,231,0.14) 56%, rgba(236,228,251,0.92) 78%, rgba(236,228,251,1) 90%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(50% 32% at 50% 34%, rgba(214,188,255,0.32), rgba(214,188,255,0.08) 58%, transparent 75%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(112deg, rgba(171,138,255,0.18) 0%, transparent 24%, transparent 78%, rgba(255,104,73,0.12) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.6,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "72px 70px 64px 70px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 26,
              minHeight: 76,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 76,
                height: 76,
                borderRadius: "9999px",
                background: "#18181b",
                color: "#ffffff",
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                flexShrink: 0,
              }}
            >
              AK
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "rgba(24,24,27,0.62)",
                fontFamily: "Roboto, Arial, sans-serif",
                fontSize: 24,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  background: "#ff4500",
                  display: "flex",
                  flexShrink: 0,
                }}
              />
              Anna Kahrs • Lead UX Designer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              maxWidth: 980,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 98,
                lineHeight: 0.9,
                fontWeight: 300,
                letterSpacing: "-0.08em",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
            >
              Designing clarity
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 12,
                fontFamily: "Georgia, Times New Roman, serif",
                fontSize: 88,
                lineHeight: 0.98,
                fontStyle: "italic",
                fontWeight: 600,
                letterSpacing: "-0.04em",
              }}
            >
              across complex systems
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 760,
                color: "rgba(24,24,27,0.72)",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  lineHeight: 1.35,
                }}
              >
                UX strategy, systems thinking, prototyping,
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 34,
                  lineHeight: 1.35,
                }}
              >
                and product design for complex digital work.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "18px 24px",
                borderRadius: 18,
                background: "#18181b",
                color: "#ffffff",
                fontSize: 24,
                fontWeight: 700,
                fontFamily: "Roboto, Arial, sans-serif",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              annakahrs.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
