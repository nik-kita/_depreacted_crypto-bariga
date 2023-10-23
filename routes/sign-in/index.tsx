import { defineRoute } from "$fresh/src/server/defines.ts";
import CssHead from "../../components/CssHead.tsx";
import GoogleSignIn from "../../islands/GoogleSignIn.tsx";

export default defineRoute((req) => {
  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <GoogleSignIn
        OAUTH_2_CLIENT_ID_WEB_1={Deno.env.get("OAUTH_2_CLIENT_ID_WEB_1") ||
          "OAUTH_2_CLIENT_ID_WEB_1 is missing!"}
      />
    </>
  );
});
