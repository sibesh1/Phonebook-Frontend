import React, { useState } from "react";

function SearchBar({ persons }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showsearch, setShowSearch] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    setShowSearch(!showsearch);
    searchItem(search);
    setSearch("");
  }
  function searchItem(term) {
    setSearchResults(
      persons.filter((element) => {
        if (element.name.toLowerCase().includes(term.toLowerCase())) {
          return true;
        }
        return false;
      })
    );
  }
  return (
    <>
      <form onSubmit={handleSearch} className="Searchbar">
        <label>
          <h3>Search:</h3>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value={showsearch ? "Clear" : "Search"}
          className="searchbutton"
        />
      </form>
      {showsearch ? (
        searchResults.length > 0 ? (
          <div className="SearchResults">
            <h3>Search Results</h3>
            <ul>
              {searchResults.map((person, idx) => (
                <li key={person.id} style={{ listStyleType: "none" }}>
                  {idx + 1}.{person.name} {person.number}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <strong>No Such Contact Found</strong>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchBar;
