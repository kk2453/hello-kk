// Cloudflare Pages Function
// reachable at /api/ray once deployed
// returns the cf-ray header of the request that hit the edge

export async function onRequest(context) {
  const { request } = context;
  const cfRay = request.headers.get("cf-ray") || "unknown";
  const colo = cfRay.split("-")[1] || "unknown";

  return new Response(
    JSON.stringify({
      ray: cfRay,
      colo: colo,
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
}