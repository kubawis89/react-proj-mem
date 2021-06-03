import React from "react";
import { SocialsDiv, SocialMedia } from "./styledSocials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Socials.scss";

function Socials() {
  return (
    <SocialsDiv>
      <SocialMedia>
        <a href="https://reactjs.org" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="iconReact"
            icon={["fab", "react"]}
            size="4x"
          />
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="iconGit"
            icon={["fab", "github"]}
            size="4x"
          />
        </a>
        <a href="https://stackoverflow.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="iconStack"
            icon={["fab", "stack-overflow"]}
            size="4x"
          />
        </a>
        <a href="https://www.javascript.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="iconJS"
            icon={["fab", "js-square"]}
            size="4x"
          />
        </a>
        <a href="https://fontawesome.com" rel="noreferrer" target="_blank">
          <FontAwesomeIcon
            className="iconFont"
            icon={["fab", "font-awesome-flag"]}
            size="4x"
          />
        </a>
      </SocialMedia>
    </SocialsDiv>
  );
}

export default Socials;
