import { useSignal } from "@preact/signals";
import CssHead from "../components/CssHead.tsx";

export default function HiApi() {
  const apiRes = useSignal(null as object | string | null);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      {apiRes.value &&
        <pre class="pre">{JSON.stringify(apiRes.value, null, 2)}</pre>}
    </>
  );
}
