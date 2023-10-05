import React, { useContext } from "react";
import { Context } from "../Body";

function DetailsButton({ id }) {
  const [viewState, setViewState] = useContext(Context);

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
