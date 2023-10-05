import React from "react";

function AddBookButton({ addBookHandler }) {
  return (
    <button
      onClick={() => addBookHandler(true)}
      id="addBook"
      className="btn btn-success mt-3"
      type="button"
    >
      <i className="bi bi-journal-plus"></i> Add Book
    </button>
  );
}

export default AddBookButton;
