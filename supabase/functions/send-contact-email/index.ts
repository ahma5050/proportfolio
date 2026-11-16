import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(() =>
  new Response(
    JSON.stringify({
      error: "This endpoint is unavailable. Please contact Ahmed directly by email.",
    }),
    {
      status: 410,
      headers: { "Content-Type": "application/json" },
    },
  ),
);
