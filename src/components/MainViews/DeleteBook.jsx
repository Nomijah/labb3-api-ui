import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Body";
import singleBookGet from "../APIconnections/SingleBookGet";
import Loading from "../Messages/Loading";
import BookDelete from "../APIconnections/BookDelete";

function DeleteBook({ id }) {
  const [bookToDelete, setBookToDelete] = useState({});
  const { vs } = useContext(Context);
  const [viewState, setViewState] = vs;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (bookId) => {
      const bookData = await singleBookGet(bookId);
      setBookToDelete(bookData.data.result);
      setLoading(false);
    };
    fetchData(id);
  }, []);

  const deleteHandler = async (bookId) => {
    await BookDelete(bookId);
    setViewState({ view: "list", id: 0 });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ul className="list-group">
            {Object.entries(bookToDelete).map((item, key) => {
              if (typeof item[1] != "boolean") {
                return (
                  <li key={key} className="list-group-item ps-5 pt-2">
                    <strong>{item[0]} :</strong> {item[1]}
                  </li>
                );
              }
            })}
          </ul>
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
