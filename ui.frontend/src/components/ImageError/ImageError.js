import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { ImgError } from "./ImageError.styled";
const ImageError = ({ imageComponent }) => {
  return (
    <>
      {imageComponent ? (
        <ImgError src={imageComponent.src} />
      ) : (
        <ImgError src="https://via.placeholder.com/150" />
      )}
    </>
  );
};

export default MapTo("reactapp/components/image-error")(ImageError);
