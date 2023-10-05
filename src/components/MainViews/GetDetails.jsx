import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Body";
import singleBookGet from "../APIconnections/SingleBookGet";
import Loading from "../Messages/Loading";

function GetDetails({ id }) {
  const [book, setBook] = useState({});
  const [viewState, setViewState] = useContext(Context);
  const [loading, setLoading] = useState(true);

  // Fetch book details
  const afterComplete = (resData) => {
    setBook(resData.result);
    setLoading(false);
  };
  useEffect(() => {
    singleBookGet(id, afterComplete);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        Object.entries(book).map((item, key) => {
          if (typeof item[1] != "boolean") {
            return (
              <p key={key}>
                {item[0]} : {item[1]}
              </p>
            );
          }
        })
      )}
      <button
        onClick={() => setViewState({ view: "list", id: 0 })}
        className="btn btn-primary"
      >
        Return to list
      </button>
    </div>
  );
}

export default GetDetails;
