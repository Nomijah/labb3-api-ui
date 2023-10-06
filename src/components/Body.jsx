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
  const [filter, setFilter] = useState({ type: "", text: "" }); // Used to filter main list
  const [viewState, setViewState] = useState({ view: "list", id: 0 }); // Used to control view in the main window
  const [showForm, setShowForm] = useState(false); // Used to toggle form visibility
  const [listRender, setListRender] = useState(true); // Used to activate useEffect fetching book list from api

  // Handle to edit filter properties
  const filterHandle = (data) => {
    setFilter({ type: data.type, text: data.text });
  };

  // Handle to toggle form view
  const addBookHandle = (data) => {
    setShowForm(data);
  };

  // Handle to make list re-render when edited
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
        <Search filterHandle={filterHandle} />
        <div className="card p-1">
          {viewState.view === "list" && <BookIndex filter={filter} />}
          {viewState.view === "details" && <GetDetails id={viewState.id} />}
          {viewState.view === "edit" && <EditDetails id={viewState.id} />}
          {viewState.view === "delete" && <DeleteBook id={viewState.id} />}
        </div>
        <AddBookButton addBookHandle={addBookHandle} />
        {showForm && (
          <AddBook addBookHandle={addBookHandle} listRenderer={listRenderer} />
        )}
      </div>
    </Context.Provider>
  );
}

export default Body;
