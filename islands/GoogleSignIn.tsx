type Props = {
  OAUTH_2_CLIENT_ID_WEB_1: string;
};

export default function GoogleSignIn(props: Props) {
  const handleCredentialResponse = (...args: unknown[]) => {
    console.log(...args);
  };

  return (
    <>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <div
        id="g_id_onload"
        data-client_id={props.OAUTH_2_CLIENT_ID_WEB_1}
        data-callback={handleCredentialResponse}
      >
      </div>
      <div class="g_id_signin" data-type="standard"></div>
      <div class="parentFlexRowCenter blockSizeFullV">
        <div class="g-signin" data-type="standard"></div>
      </div>
    </>
  );
}
