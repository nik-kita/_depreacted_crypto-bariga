import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef, useState } from "preact/hooks";
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
  const [isHandlerAppended, setIsHandlerAppended] = useState(false);
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
        data-type="icon"
        data-shape="pill"
        data-theme="filled_black"
        data-text="continue_with"
        data-size="large"
        data-locale="en-US"
      >
      </div>
    </div>,
  );

  useEffect(() => {
    window.gCallback = (...args) => {
      interface Test {
        hello: string;
      }

      console.warn(...args);
      alert("hi!");
    };

    setIsHandlerAppended(true);
  }, []);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          {new Intl.DateTimeFormat("en", {
            timeStyle: "long",
          }).format(new Date())}
          <script src="https://accounts.google.com/gsi/client" async></script>
        </title>
      </Head>
      {isHandlerAppended && gButton.current}
    </>
  );
}
