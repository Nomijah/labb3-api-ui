import React, { useContext } from "react";
import { Context } from "../Body";

function DeleteButton({ id }) {
  const { vs } = useContext(Context);
  const [viewState, setViewState] = vs;

  return (
    <button
      onClick={() => setViewState({ view: "delete", id: id })}
      className="btn btn-danger ms-2"
    >
      Delete <i className="bi bi-trash"></i>
    </button>
  );
}

export default DeleteButton;
