import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Body";
import Axios from "axios";
import singleBookGet from "../APIconnections/SingleBookGet";
import Loading from "../Messages/Loading";

function DeleteBook({ id }) {
  const [bookToDelete, setBookToDelete] = useState({});
  const [viewState, setViewState] = useContext(Context);
  const [loading, setLoading] = useState(true);

  // Fetch book details
  const afterComplete = (resData) => {
    setBookToDelete(resData.result);
    setLoading(false);
  };
  useEffect(() => {
    singleBookGet(id, afterComplete);
  }, []);

  const deleteHandler = (bookId) => {
    Axios.delete(`https://localhost:7121/books/${bookId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Book deleted successfully.");
        }
      })
      .catch((err) => console.log(err));

    setViewState({ view: "list", id: 0 });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {Object.entries(bookToDelete).map((item, key) => {
            if (typeof item[1] != "boolean") {
              return (
                <p key={key} className="ml-2">
                  {item[0]} : {item[1]}
                </p>
              );
            }
          })}
          <p className="h5">Are you sure you want to delete this book?</p>
        </div>
      )}

      <button
        onClick={() => deleteHandler(bookToDelete.id)}
        className="btn btn-success mb-2 ms-5"
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => setViewState({ view: "list", id: 0 })}
        className="btn btn-warning mb-2 ms-2"
      >
        Cancel
      </button>
    </div>
  );
}

export default DeleteBook;
