import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { FooterContainer, FooterText } from "./Footer.styled";
function Footer({ text }) {
  const PropsText = `created by ${text} - devChallenges.io`;
  const TextDefault = "Digite algo";
  return (
    <FooterContainer>
      <FooterText>{text ? PropsText : TextDefault}</FooterText>
    </FooterContainer>
  );
}

export default MapTo("reactapp/components/footer")(Footer);
