import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

export default function GoogleSignIn(props: Props) {
  const gButton = useRef(null);

  useEffect(() => {
  }, [gButton.current]);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div>
        <div ref={gButton}>
          <div
            id="g_id_onload"
            data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
            data-context="use"
            data-ux_mode="popup"
            data-callback="handleGoogleOneTapAuth"
            data-nonce=""
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
