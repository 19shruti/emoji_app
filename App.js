import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😈": "angry",
  "😢": "one drop anshu",
  "😭": "crying",
  "🤐": "speechless"
};
var emojiWeKnow = object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.event;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);

    function emojiClickHandler(emoji) {
      var meaning = emojiDictionary[emoji];
      setMeaning(meaning);
    }
  }

  return (
    <div className="App">
      <h1>inside out</h1>
      <input onCharge={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h4> emoji we know </h4>

      <textbox> </textbox>
    </div>
  );
}
