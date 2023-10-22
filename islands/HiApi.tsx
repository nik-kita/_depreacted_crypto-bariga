import { useSignal } from "@preact/signals";
import CssHead from "../components/CssHead.tsx";

export default function HiApi() {
  let toggleWs = false;
  const apiRes = useSignal(null as object | string | null);
  const click = () => {
    toggleWs = !toggleWs;

    let ws: WebSocket | null = null;

    if (toggleWs) {
      const headers = new Headers();

      headers.append("auth", "me");

      ws = new WebSocket("ws://localhost:3000/monitor");

      ws.onopen = () => {
        apiRes.value = "Websocket was successfully opened!";
      };

      ws.onmessage = (ev) => {
        apiRes.value = ev.data;
      };

      ws.onclose = () => {
        apiRes.value = "Websocket was closed.";
      };
    } else {
      apiRes.value = null;

      if (!ws) {
        console.warn("hmm... where is ws? i want to close it!");

        return;
      }

      (ws as WebSocket).close();
    }
  };

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <div class="wrapFlex">
        <button onClick={click}>Hello API!</button>
        {apiRes.value &&
          <pre class="pre">{JSON.stringify(apiRes.value, null, 2)}</pre>}
      </div>
    </>
  );
}
