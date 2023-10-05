import React, { useState } from "react";

function Search({ filterHandler }) {
  const [input, setInput] = useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  // Used to clear the input when clearing the search results
  const clearInput = () => {
    setInput("");
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          onChange={handleChange}
          type="text"
          id="searchInput"
          className="form-control"
          placeholder="Search..."
        ></input>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div>
            <button
              id="titleSearch"
              className="btn btn-success"
              type="button"
              onClick={() => filterHandler({ text: input, type: "title" })}
            >
              Filter by Title
            </button>
            <button
              id="authorSearch"
              className="btn btn-primary m-3 mt-0 mb-0"
              type="button"
              onClick={() => filterHandler({ text: input, type: "author" })}
            >
              Filter by Author
            </button>
            <button
              id="clearSearch"
              className="btn btn-secondary"
              type="button"
              onClick={() => {
                filterHandler({ text: "", type: "" });
                clearInput();
                document.getElementById("searchInput").value = "";
              }}
            >
              Clear search result
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
