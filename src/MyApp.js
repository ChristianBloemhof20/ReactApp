import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <div className="container">
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={removeOneCharacter}
        />
        <Form handleSubmit={updateList} />
      </div>
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
