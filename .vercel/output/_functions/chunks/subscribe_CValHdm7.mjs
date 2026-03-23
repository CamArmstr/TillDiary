const POST = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email")?.toString().trim();
  if (!email || !email.includes("@")) {
    return new Response(JSON.stringify({ error: "Invalid email address." }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  {
    return new Response(JSON.stringify({ error: "Server configuration error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
