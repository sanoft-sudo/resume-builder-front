import React from "react";
import { GoogleLogin } from "react-google-login";

import Button from '@material-ui/core/Button';

export default function SignInWithGoogle() {
  const clientId =
    "65428811960-vkvso7b7905hg7h91qtuejaggtri5jvf.apps.googleusercontent.com";

  const loginGoogle = res => {
    let profile = res.getBasicProfile();
    console.log("google profile",profile);
    console.log("google profilename",profile.Ad);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <Button onClick={renderProps.onClick} className="signIn__submitBtn" color="secondary"  variant="contained" size="medium" disabled={renderProps.disabled}>
            <i className="fab fa-google google_icon" />
            Sign in with Google
          </Button>
        )}
        buttonText="Login"
        onSuccess={loginGoogle}
        onFailure={loginGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
}
