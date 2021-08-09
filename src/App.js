import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😈": "angry",
  "😢": "one drop anshu",
  "😭": "crying",
  "🤐": "speechless",
  "😂": "laughing",
  "🤩": "exciting",
  "🤔": "strange",
  "🤣": "laughing out loud",
  "🤑": "money",
  "🤮": "pissed of ",
  "😍": "beautiful",
  "🙄": "strange"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this data in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> INSIDE OUT </h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>
      <h3> emoji we know </h3>

      <ul className="non-bullets">
        {emojiWeKnow.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              <a href="#output"> {emoji}</a>
            </span>
          );
        })}
      </ul>
    </div>
  );
}
