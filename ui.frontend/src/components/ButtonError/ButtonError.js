import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ButtonText } from "./ButtonError.styled";
const ButtonError = ({ text }) => {
  return <ButtonText>{text ? text : "Digite algo"}</ButtonText>;
};

export default MapTo("reactapp/components/button-error")(ButtonError);
