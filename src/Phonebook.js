import React, { useState, useEffect } from "react";
import axios from "axios";
import AddNew from "./AddNew";
import SearchBar from "./SearchBar";
import Showperson from "./Showperson";

function Phonebook() {
  const [persons, setPersons] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const url = "/api/persons";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SearchBar persons={persons} />
      <AddNew persons={persons} setPersons={setPersons} url={url} />
      <div className="showAll">
        <button value={showAll} onClick={() => setShowAll(!showAll)}>
          {!showAll ? "Show All Contacts" : "Hide All Contacts"}
        </button>
        {showAll ? (
          <ul>
            {persons.map((person, idx) => (
              <Showperson
                person={person}
                url={url}
                persons={persons}
                setPersons={setPersons}
                idx={idx}
                key={person.id}
              />
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Phonebook;
