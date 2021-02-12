import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TumblrShareButton,
  TumblrIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";

export const SocialMediaShare = ({ meme }) => {
  return (
    //adds share buttons
    <div style={{ textAlign: "center" }}>
      <img style={{ width: 200 }} src={meme} alt="custom meme" />
      <p>Share:</p>
      <form
        onClick={async (e) => {
          e.preventDefault();
          console.log("refresh");
          window.location.reload();
        }}
      >
        <FacebookShareButton url={meme}>
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton url={meme}>
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <TumblrShareButton url={meme}>
          <TumblrIcon size={36} />
        </TumblrShareButton>
        <WhatsappShareButton url={meme}>
          <WhatsappIcon size={36} />
        </WhatsappShareButton>
        <TelegramShareButton url={meme}>
          <TelegramIcon size={36} />
        </TelegramShareButton>
        <RedditShareButton url={meme}>
          <RedditIcon size={36} />
        </RedditShareButton>
        <p></p>
      </form>
    </div>
  );
};
