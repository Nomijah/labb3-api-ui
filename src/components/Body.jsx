import React, { useState } from "react";
import BookIndex from "./MainViews/BookIndex";
import Search from "./Search";
import "./Body.css";
import GetDetails from "./MainViews/GetDetails";
import AddBookButton from "./Buttons/AddBookButton";
import AddBook from "./MainViews/AddBook";
import EditDetails from "./MainViews/EditDetails";
import DeleteBook from "./MainViews/DeleteBook";

export const Context = React.createContext();

function Body() {
  const [filterText, setFilterText] = useState("");
  const [filterType, setFilterType] = useState("");
  const [viewState, setViewState] = useState({ view: "list", id: 0 }); // Used to control view in the main window
  const [showForm, setShowForm] = useState(false); // Used to toggle form visibility
  const [listRender, setListRender] = useState(true); // Used to activate useEffect fetching book list from api

  const filterHandler = (data) => {
    setFilterText(data.text);
    setFilterType(data.type);
  };

  const addBookHandler = (data) => {
    setShowForm(data);
  };

  const listRenderer = () => {
    setListRender(!listRender);
  };

  return (
    <Context.Provider
      value={{
        vs: [viewState, setViewState],
        lr: [listRender, setListRender],
      }}
    >
      <div className="mainContainer">
        <Search filterHandler={filterHandler} />
        <div className="card p-1">
          {viewState.view === "list" && (
            <BookIndex filterText={filterText} filterType={filterType} />
          )}
          {viewState.view === "details" && <GetDetails id={viewState.id} />}
          {viewState.view === "edit" && <EditDetails id={viewState.id} />}
          {viewState.view === "delete" && <DeleteBook id={viewState.id} />}
        </div>
        <AddBookButton addBookHandler={addBookHandler} />
        {showForm && (
          <AddBook
            addBookHandler={addBookHandler}
            listRenderer={listRenderer}
          />
        )}
      </div>
    </Context.Provider>
  );
}

export default Body;
