import React, { useState } from "react";
import axios from "axios";

function AddNew({ persons, setPersons, url }) {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  function ifContains(name) {
    let flag = false;
    persons.forEach((element) => {
      if (element.name === name) {
        flag = true;
      }
    });
    return flag;
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (ifContains(newName)) {
      alert("Name Already Exists");
    } else {
      const newcontact = {
        name: newName,
        number: newNumber,
      };
      axios.post(url, newcontact).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="Addnew">
      <h3 className="addnewcontactheading">Add New Contact</h3>
      <label>
        <h3>Name:</h3>
        <input
          size="30"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <label>
        <h3>Phone Number:</h3>
        <input
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </label>
      <input type="submit" value="Add" className="addbutton" />
    </form>
  );
}

export default AddNew;
