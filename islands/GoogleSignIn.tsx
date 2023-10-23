import { Head } from "$fresh/runtime.ts";
import { useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

const G_HANDLER = {
  gCallback(...args: unknown[]) {
    console.warn(...args);
    alert("hi!");
  },
} as const;

export default function GoogleSignIn(props: Props) {
  const gButton = useRef(null);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          {new Intl.DateTimeFormat("en", {
            dateStyle: "short",
            timeStyle: "long",
          }).format(new Date())}
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div ref={gButton}>
        <script>{G_HANDLER.gCallback.toString()}</script>
        <div
          id="g_id_onload"
          data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
          data-context="use"
          data-ux_mode="popup"
          data-callback={"gCallback" satisfies keyof typeof G_HANDLER}
          data-nonce=""
          data-auto_prompt="false"
        >
        </div>

        <div
          class="g_id_signin"
          data-type="icon"
          data-shape="pill"
          data-theme="filled_black"
          data-text="continue_with"
          data-size="large"
          data-locale="en-US"
        >
        </div>
      </div>
    </>
  );
}
