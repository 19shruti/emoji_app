import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😈": "angry",
  "😢": "one drop anshu",
  "😭": "crying",
  "🤐": "speechless"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="app">
      <h1> INSIDE OUT </h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      <h3> emoji we know </h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
