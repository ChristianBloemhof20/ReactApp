import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";
import axios from "axios";

function MyApp() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetchAll().then((result) => {
        if (result) setCharacters(result);
      });
    }, []);

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:5000/users");
      return response.data.users_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  async function makePostCall(person) {
    try {
      const response = await axios.post("http://localhost:5000/users", person);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(person) {
    makePostCall(person).then((result) => {
      if (result) setCharacters([...characters, person]);
    });
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
