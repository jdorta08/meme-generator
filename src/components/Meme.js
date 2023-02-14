import memeData from "./memeData";
import React, { useState } from "react";

export default function Meme() {
  //varibale with meme url
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memeUrl = memeData.data.meme;
    const randNum = Math.floor(Math.random() * memeUrl.length);
    setMemeImage(memeUrl[randNum].url);
  }
  return (
    <div className="form-container">
      <div className="input-form-wrapper">
        <input
          className="form-text-input"
          type="text"
          placeholder="Top Text"
        ></input>
        <input
          className="form-text-input"
          type="text"
          placeholder="Bottom Text"
        ></input>
      </div>
      <div className="image-container">
        <img alt="meme-generator" className="meme-image" src={memeImage} />
      </div>
      <div className="button-form-wrapper">
        <button onClick={getMemeImage}>Generate</button>
      </div>
    </div>
  );
}
