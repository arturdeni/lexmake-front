import React, { useState } from "react";
import "./ImageSkeleton.css";

const ImageSkeleton = ({
  src,
  alt,
  className = "",
  onClick = null,
  width = "100%",
  height = "auto",
  objectFit = "cover",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerStyle = {
    width,
    height,
  };

  const imgStyle = {
    objectFit,
  };

  return (
    <div className="image-container" style={containerStyle}>
      {!isLoaded && <div className="skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoaded ? "image-visible" : "image-hidden"
        }`}
        style={imgStyle}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageSkeleton;
