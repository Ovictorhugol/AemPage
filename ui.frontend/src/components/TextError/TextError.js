import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ErrorContainer, ErrorText } from "./TextError.styled";
const TextError = (props) => {
  const defaultText = "Digite algo";
  return (
    <ErrorContainer>
      <ErrorText>{props.text ? props.text : defaultText}</ErrorText>
    </ErrorContainer>
  );
};

export default MapTo("reactapp/components/text-error")(TextError);
