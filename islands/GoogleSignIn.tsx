import { Head } from "$fresh/runtime.ts";
import { useEffect, useRef } from "preact/hooks";
import CssHead from "../components/CssHead.tsx";

type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

declare global {
  interface Window {
    google: typeof import("npm:google-one-tap");
  }
}

export default function GoogleSignIn(props: Props) {
  const ID = props.OAUTH_2_CLIENT_ID_WEB_1;
  const gDiv = useRef(null);

  function handleCredentialResponse(response: unknown) {
    console.log("google response: ");
    console.warn(response);
  }

  useEffect(() => {
    if (!gDiv.current) return;

    window.google.accounts.id.initialize({
      client_id: ID,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("gDiv"),
      {
        theme: "filled_black",
        size: "large",
        text: "signin-with",
        shape: "pill",
        context: "use",
        ux_mode: "popup",
      }, // customization attributes
    );
    window.google.accounts.id.prompt(); // also display the One Tap dialog
  }, [gDiv.current]);

  return (
    <>
      <CssHead importMetaUrl={import.meta.url} />
      <Head>
        <title>
          Sign IN / UP / OUT
        </title>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Head>
      <div
        id="gDiv"
        ref={gDiv}
        class={"parentFlexRowCenter blockSizeFullV"}
      >
      </div>
    </>
  );
}
