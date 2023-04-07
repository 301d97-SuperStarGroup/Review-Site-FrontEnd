import React from "react";
import GGgif from '../src/img/gg-by-MatthewHenry.gif'
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <Container>
      <button className="loginButton" onClick={() => loginWithRedirect()}>Log In</button>;
      <img className="introPic" src={GGgif} alt="Gif of Good Game"></img>
      </Container>
    </>
  )
};

export default LoginButton;