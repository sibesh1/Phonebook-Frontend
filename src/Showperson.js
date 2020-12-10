import React from "react";
import axios from "axios";

function Showperson({ person, url, persons, setPersons, idx }) {
  const handleDelete = (id) => {
    let r = window.confirm("Are you sure?");
    if (r) {
      const persontemp = persons.find((n) => n.id === id);
      //console.log(notetemp);
      axios
        .delete(`${url}/${id}`, persontemp)
        .then((response) => {
          //console.log(response.data);
          setPersons(persons.filter((p1) => p1.id !== id));
          //console.log(notes);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <React.Fragment>
      <li style={{ listStyleType: "none" }}>
        {idx + 1}.{person.name} {person.number}
      </li>
      <button onClick={() => handleDelete(person.id)}>Delete</button>
    </React.Fragment>
  );
}

export default Showperson;
