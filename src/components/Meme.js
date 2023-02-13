import memeData from "./memeData";

export default function Meme() {
  function clickHandler() {
    const memeUrl = memeData.data.meme;
    const randNum = Math.floor(Math.random() * memeUrl.length);
    const randomUrl = memeUrl[randNum].url;
    console.log(randomUrl);
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
        <img></img>
      </div>
      <div className="button-form-wrapper">
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  );
}
