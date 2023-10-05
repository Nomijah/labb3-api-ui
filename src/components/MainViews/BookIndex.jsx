import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import BookList from "./BookList";
import { Context } from "../Body";

function BookIndex({ filterText, filterType }) {
  const [books, setBooks] = useState([{}]);
  const [listRender, setListRender] = useState(true);

  useEffect(() => {
    Axios.get("https://localhost:7121/books").then((res) => {
      setBooks(res.data.result);
    });
  }, [listRender]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Genre</th>
          <th>Available</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <BookList
          books={books}
          filterText={filterText}
          filterType={filterType}
        />
      </tbody>
    </table>
  );
}

export default BookIndex;
