import React, { useContext } from "react";
import { Context } from "../Body";

function EditButton({ id }) {
  const { vs } = useContext(Context);
  const [viewState, setViewState] = vs;

  return (
    <button
      onClick={() => setViewState({ view: "edit", id: id })}
      className="btn btn-warning ms-2"
    >
      Edit <i className="bi bi-pencil"></i>
    </button>
  );
}

export default EditButton;
