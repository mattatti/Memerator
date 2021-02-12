import React from "react";

export const Meme = ({ template, onClick }) => {
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
      key={template.id}
      src={template.url}
      alt={template.name}
      onClick={onClick}
    />
  );
};
