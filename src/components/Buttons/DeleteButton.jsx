import React, { useContext } from "react";
import { Context } from "../Body";

function DeleteButton({ id }) {
  const [viewState, setViewState] = useContext(Context);

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
