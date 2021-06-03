import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #222222;
  padding: 30px;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Copyright &reg; by WSB students 2020/2021</p>
    </StyledFooter>
  );
}

export default Footer;
