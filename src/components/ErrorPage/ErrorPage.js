import React from "react";
import { NavLink } from "react-router-dom";
import { ErrorDiv } from "./styledErrorPage";

const ErrorPage = () => {
  return (
    <ErrorDiv>
      <h1>404</h1>
      <h2>Oh man, looks like you're lost:(</h2>
      <p>
        Better go back to our <NavLink to="/memes">homepage!</NavLink>
      </p>
      <img
        src="https://img.joemonster.org/upload/zno/6220097e52abfbnie_bangla_guy.jpg"
        width="600"
        alt="NIE BANGLA"
      />
    </ErrorDiv>
  );
};

export default ErrorPage;
