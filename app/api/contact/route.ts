export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid payload" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    const makeRes = await fetch(
      "https://hook.us2.make.com/50p314l2xljo2sg72j6tmg2p4utqlz2i",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      },
    );
    if (!makeRes.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "Upstream error" }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function GET() {
  return new Response(
    JSON.stringify({
      ok: false,
      error: "Method not allowed",
    }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    },
  );
}
