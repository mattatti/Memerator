import React, { useState, useEffect } from "react";
import { Meme } from "./components/Meme";
import styles from "./mystyle.module.css";
import { SocialMediaShare } from "./components/SocialMediaShare";

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);

  return "?" + params.join("&");
};

function MemeGenerator() {
  const [memeTemplates, setTemplates] = useState([]);
  const [memeTemplate, setTemplate] = useState(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    //get the list of memes from the imgflip api
    fetch("https://api.imgflip.com/get_memes").then((x) =>
      x.json().then((response) => setTemplates(response.data.memes))
    );
  }, []);

  if (meme) {
    //sends the generated meme to the social media buttons when the user clicks one of them
    return <SocialMediaShare meme={meme} />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      {
        //shows the form that allows the user to edit the generated meme
        memeTemplate && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              //preprare the data the imgflip api needs to create a meme
              const params = {
                template_id: memeTemplate.id,
                text0: topText,
                text1: bottomText,
                username: "matan.atti",
                password: "m12345678",
              };
              const response = await fetch(
                `https://api.imgflip.com/caption_image${objectToQueryParam(
                  params
                )}`
              );
              const result = await response.json();
              console.log("result: ", result);
              if (!result.success) {
                setMeme(null);
              }
              if (result.success) {
                setMeme(result.data.url);
                //stores the imgflip api generated link in the browser localstorage
                localStorage.setItem(Date.now(), result.data.url);
              }
            }}
          >
            <Meme template={memeTemplate} />
            <p></p>

            <input
              maxLength="50"
              className={styles.topText}
              placeholder="top text"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />

            <input
              maxLength="50"
              className={styles.bottomText}
              placeholder="bottom text"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />
            <p></p>
            <button className={styles.rainbowButton} type="submit">
              Create{" "}
            </button>
          </form>
        )
      }
      {!memeTemplate && (
        //shows the list of meme images with the ability to click them
        <>
          {memeTemplates.map((template) => {
            return (
              <Meme
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default MemeGenerator;
