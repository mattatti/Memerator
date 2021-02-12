import React from "react";
import { GeneratedMeme } from "./GeneratedMeme";

function HistoryMemes() {
  const memes = [];

  console.log("local storage size: ", localStorage.length);
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log("local storage: ", localStorage.getItem(key));
    //iterates through the localstorage and pushing each element into a map
    memes.push({
      id: key,
      url: localStorage.getItem(key),
    });
  }
  console.log("my memes: ", memes);
  //iterates through the map to render all the previously generated memes
  return memes.map((template) => {
    return <GeneratedMeme template={template} />;
  });
}

export default HistoryMemes;
