import React, { useContext } from "react";
import { Context } from "../Body";

function DetailsButton({ id }) {
  const { vs } = useContext(Context);
  const [viewState, setViewState] = vs;

  return (
    <button
      onClick={() => setViewState({ view: "details", id: id })}
      className="btn btn-success"
    >
      Details <i className="bi bi-journal-text"></i>
    </button>
  );
}

export default DetailsButton;
