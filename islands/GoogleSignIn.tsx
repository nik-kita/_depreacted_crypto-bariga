import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

const G_HANDLER_NAME = "handleGoogleOneTapAuth" as const;

/// <reference types="npm:google-one-tap" />
/// <reference types="npm:google.accounts" />

declare global {
  interface Window {
    google: typeof import("npm:google-one-tap");
    [G_HANDLER_NAME]: (...args: unknown[]) => void | Promise<void>;
  }
}

export default function GoogleSignIn(props: Props) {
  const gButton = useRef(null);

  useEffect(() => {
    window.handleGoogleOneTapAuth = (...args) => {
      console.warn(...args);
      alert("hi!");
    };

    window.google.accounts.id.initialize({
      client_id: props.OAUTH_2_CLIENT_ID_WEB_1,
      callback: console.info,
      state_cookie_domain: "https://example.com",
    });
  }, [gButton.current]);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          {new Intl.DateTimeFormat("en", {
            dateStyle: "long",
            timeStyle: "long",
          }).formatToParts(new Date())}
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div>
        <div ref={gButton}>
          <div
            id="g_id_onload"
            data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
            data-context="use"
            data-ux_mode="popup"
            data-callback={"handleGoogleOneTapAuth" satisfies typeof G_HANDLER_NAME}
            data-nonce="ok, google"
            data-auto_select="true"
            data-itp_support="true"
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
            data-logo_alignment="left"
          >
          </div>
        </div>
      </div>
    </>
  );
}
