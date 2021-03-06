import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */
const emojiDictionary = {
  "π": "Smiling",
  "π³": "disbelief",
  "π": "sad",
  "π₯‘": "takeout box",
  "β€οΈ": "love",
  "π": "annoyance",
  "π¦πΊ": "Australia Day",
  "π«π· ": "Bastille Day",
  "π ": "Birthday",
  "ποΈ": "Black Friday",
  "βπΏ": "Black Lives Matter",
  "π¨π¦": "Canada Day",
  "π§π· ": "Carnaval",
  "π": "Chinese New Year",
  "π": "Christmas",
  "π²π½": "Cinco de Mayo",
  "π¦  ": "Coronavirus",
  "πͺ": "Diwali",
  "π¨π³": "Dragon Boat Festival",
  "π° ": "Easter",
  "π₯": "Emoji Movie",
  "π ": "Fall / Autumn",
  "π¨": "Fatherβs Day",
  "πͺ": "Festivus",
  "πΏ ": "Four Twenty / 420",
  "π": "Graduation",
  "π₯": "Guy Fawkes",
  "π": "Halloween",
  "π": "Hanukkah",
  "π": "Hearts",
  "ποΈ": "Holi",
  "πΊπΈ": "Independence Day",
  "βοΈ": "International Women Day",
  "π€±": "Motherβs Day",
  "π": "New Yearβs Eve",
  "π": "NSFW",
  "π": "Olympics",
  "π³οΈβπ": "Pride",
  "π­ ": "Purim",
  "π": "Queenβs Birthday",
  "βͺοΈ ": "Ramadan",
  "π±": "Spring",
  "βοΈ": "St Patrickβs Day",
  "βοΈ": "Summer",
  "π": "Super Bowl",
  "π¦": "Thanksgiving",
  "π": "Valentineβs Day",
  "ποΈ": "Veterans Day",
  "π° ": "Wedding / Marriage",
  "β": "Winter",
  "πΏ": "Winter Olympics",
  "π‘": "Working From Home",
  "β½ ": "World Cup",
  "π ": "World Emoji Day"
};

/**
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  const changeHandler  = event => {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  const emojiClickHandler = inputEmoji => {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>emoji mania</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
