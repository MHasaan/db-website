import React, { useRef } from 'react';
import { GoogleLogin } from 'react-google-login'; // Add Google Login Later
import * as Components from "./Components";
import "./styles.css";

function ErrorModal({ errorMessage }) {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '50px',
      zIndex: '1000',
      border: '1px solid red',
      borderRadius: '10px',
      display: errorMessage ? 'block' : 'none'
    }}>
      <h2 style={{ color: 'red' }}>{errorMessage}</h2>
    </div>
  );
}

function LoginForm({ onLoginForm }) {
  const [signIn, toggle] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const errorTimeoutRef = useRef(null);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) {
      onLoginForm();
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!name || !email || !password) {
      errorTimeoutRef.current = setTimeout(() => {
        setErrorMessage('Please fill out all fields.');
        setTimeout(() => setErrorMessage(''), 1000); // Clear the error message after 5 seconds
      }, 100); // Show the error message after 1 second
      return;
    }

    clearTimeout(errorTimeoutRef.current);
    setErrorMessage('');
    onLoginForm();
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (!email || !password) {
      errorTimeoutRef.current = setTimeout(() => {
        setErrorMessage('Please fill out all fields.');
        setTimeout(() => setErrorMessage(''), 1000); // Clear the error message after 5 seconds
      }, 100); // Show the error message after 1 second
      return;
    }

    
    
    clearTimeout(errorTimeoutRef.current);
    setErrorMessage('');
    onLoginForm();
  };
  return (
    <Components.Container>
      <ErrorModal errorMessage={errorMessage} />
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title>Create Account</Components.Title>
          <GoogleLogin
            clientId="460649283968-p85jgr457r0eq8rspegj4kqs9lo0bh2u.apps.googleusercontent.com"
            buttonText="Register with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <Components.Input name="name" type="text" />
          <Components.Input name="email" type="email" />
          <Components.Input name="password" type="password" />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignIn}>
          <Components.Title>Sign in</Components.Title>
          <GoogleLogin
            clientId="460649283968-p85jgr457r0eq8rspegj4kqs9lo0bh2u.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <Components.Input name="email" type="email" />
          <Components.Input name="password" type="password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
      
    </Components.Container>
  );
}

export default LoginForm;
