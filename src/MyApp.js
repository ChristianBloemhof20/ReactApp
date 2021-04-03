import React, { useState } from "react";
import Table from "./Table";

function MyApp() {
  const [characters, setCharacters] = useState([
    {
      name: "Charlie",
      job: "Janitor",
    },
    {
      name: "Mac",
      job: "Bouncer",
    },
    {
      name: "Dee",
      job: "Aspring actress",
    },
    {
      name: "Dennis",
      job: "Bartender",
    },
  ]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <p>
        Credit to{" "}
        <a
          href="https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l"
          target="_blank"
        >
          Dom at Dev.to
        </a>{" "}
        for my table looking nice.
      </p>
    </div>
  );
}

export default MyApp;
