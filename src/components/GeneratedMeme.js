import React from "react";

export const GeneratedMeme = ({ template }) => {
  return (
    <img
      style={{
        borderWidth: 3,
        borderRadius: 20,
        minWidth: 200,
        minHeight: 200,
        maxWidth: 200,
        maxHeight: 200,
        margin: 6,
      }}
      alt="custom meme"
      key={template.id}
      src={template.url}
    />
  );
};
