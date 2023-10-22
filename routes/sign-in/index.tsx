import { defineRoute } from "$fresh/src/server/defines.ts";
import CssHead from "../../components/CssHead.tsx";

export default defineRoute((req) => {
  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <h2>// TODO Sign-in page</h2>;
    </>
  );
});
