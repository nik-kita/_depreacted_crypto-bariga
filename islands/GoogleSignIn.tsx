type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

function handleGoogleSignInRes(response: unknown) {
  console.log(response);
}

export default function GoogleSignIn(props: Props) {
  return (
    <>
      <h1>1</h1>
      <script src="https://accounts.google.com/gsi/client" async></script>
      <div
        id="g_id_onload"
        data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
        data-context="signin"
        data-ux_mode="popup"
        data-callback={handleGoogleSignInRes.name}
        data-auto_prompt="false"
      >
      </div>
      <script>
        {handleGoogleSignInRes.toString()}
      </script>

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
    </>
  );
}
