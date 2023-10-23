import { Head } from "$fresh/runtime.ts";
import { useRef } from "preact/hooks";
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
  const gButton = useRef(
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
        data-type="standard"
        data-shape="pill"
        data-theme="filled_black"
        data-text="continue_with"
        data-size="large"
        data-locale="en-US"
      >
      </div>
    </div>,
  );

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          {new Intl.DateTimeFormat("en", {
            timeStyle: "long",
          }).format(new Date())}
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      {
        /**
         * // TODO find more beauty solution (or use js)
         */
      }
      <script>
        {`
        function ${G_HANDLER_NAME}(...args) {
          console.warn(...args);
        }
      `}
      </script>
      {gButton.current}
    </>
  );
}
