import { defineRoute } from "$fresh/src/server/defines.ts";
import { getCookies } from "$std/http/cookie.ts";
import CssHead from "../components/CssHead.tsx";
import Monitor from "../islands/Monitor.tsx";
import { APP_ROUTES } from "../src/const.ts";

type SessionCookies = {
  auth: string;
};

export default defineRoute((req, ctx) => {
  const headers = req.headers;
  const cookies = getCookies(headers) as Partial<SessionCookies>;

  if (!cookies.auth) {
    return new Response(null, {
      status: 307,
      headers: new Headers({
        ...headers,
        location: APP_ROUTES.singIn,
      }),
    });
  }

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Monitor />
    </>
  );
});
