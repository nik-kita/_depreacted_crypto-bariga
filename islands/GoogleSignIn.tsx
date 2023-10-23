type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

export default function GoogleSignIn(props: Props) {
  const handleCredentialResponse = (...args: unknown[]) => {
    console.log(...args);
  };

  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async></script>

      <div
        id="g_id_onload"
        data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
        data-context="signin"
        data-ux_mode="popup"
        data-callback={handleCredentialResponse}
        data-auto_prompt="false"
      >
      </div>
      <hr />
      <div class="parentFlexRowCenter blockSizeFullV">
        <div
          class="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        >
        </div>
      </div>
      <hr />
    </>
  );
}
