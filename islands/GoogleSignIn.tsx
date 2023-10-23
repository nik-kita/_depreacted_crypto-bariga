import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

const G_HANDLER_NAME = "gCallback" as const;
declare global {
  interface Window {
    // google: typeof import("npm:google-one-tap");
    [G_HANDLER_NAME]: (...args: unknown[]) => void | Promise<void>;
  }
}

export default function GoogleSignIn(props: Props) {
  const gButton = useRef(null);

  useEffect(() => {
    window.gCallback = (...args) => {
      console.warn(...args);
      alert("hi!");
    };
  }, [gButton.current]);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          {new Intl.DateTimeFormat("en", {
            dateStyle: "long",
            timeStyle: "long",
          }).format(new Date())}
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div>
        <div
          id="g_id_onload"
          data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
          data-context="use"
          data-ux_mode="popup"
          data-callback={"gCallback" satisfies typeof G_HANDLER_NAME}
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
