// Cloudflare Pages Function
// reachable at /api/ray once deployed
// returns the cf-ray header and edge metadata from request.cf

export async function onRequest(context) {
  const { request } = context;

  const cfRay = request.headers.get("cf-ray") || "unknown";

  // request.cf is set by Cloudflare's edge with rich metadata about
  // the incoming request. Available fields include: colo (IATA airport
  // code of the data center), country, city, timezone, asn, and more.
  // This is more reliable than parsing the cf-ray header suffix.
  const colo = request.cf?.colo || "unknown";
  const country = request.cf?.country || "unknown";
  const city = request.cf?.city || "unknown";

  return new Response(
    JSON.stringify({
      ray: cfRay,
      colo: colo,
      country: country,
      city: city,
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
        // CORS — allows the JS in our page to fetch this endpoint
        // without browser cross-origin complaints. Safe because this
        // endpoint returns no sensitive data.
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}