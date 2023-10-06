import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import BookList from "./BookList";
import { Context } from "../Body";

function BookIndex({ filter }) {
  const [books, setBooks] = useState([{}]);
  const { lr } = useContext(Context);
  const [listRender, setListRender] = lr;

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
        <BookList books={books} filter={filter} />
      </tbody>
    </table>
  );
}

export default BookIndex;
