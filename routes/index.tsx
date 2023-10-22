import { defineRoute } from "$fresh/src/server/defines.ts";
import { getCookies } from "$std/http/cookie.ts";
import CssHead from "../components/CssHead.tsx";

type SessionCookies = {
  session: string;
};

type RedirectCookies = {
  location: string;
};

export default defineRoute((req, ctx) => {
  /**
   * is login ? welcome : redirect
   */
  const cookies = getCookies(req.headers) as Partial<SessionCookies>;

  if (!cookies.session) {
    return new Response(null, {
      status: 307,
      headers: new Headers(
        {
          location: "/sign-in",
        } satisfies RedirectCookies,
      ),
    });
  }

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <h1>Welcome!</h1>
    </>
  );
});
