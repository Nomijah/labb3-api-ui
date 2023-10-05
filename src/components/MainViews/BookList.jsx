import React from "react";
import DetailsButton from "../Buttons/DetailsButton";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

function BookList({ books, filterType, filterText }) {
  const bookFilter = (data) => {
    if (filterType === "title") {
      return data.filter((b) =>
        b.title.toLowerCase().includes(filterText.toLowerCase())
      );
    }
    if (filterType === "author") {
      return data.filter((b) =>
        b.author.toLowerCase().includes(filterText.toLowerCase())
      );
    }
    return data;
  };

  return (
    <>
      {bookFilter(books).map((data) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.author}</td>
          <td>{data.year}</td>
          <td>{data.genre}</td>
          <td>{data.isAvailable ? "Yes" : "No"}</td>
          <td>
            <DetailsButton id={data.id} />
            <EditButton id={data.id} />
            <DeleteButton id={data.id} />
          </td>
        </tr>
      ))}
    </>
  );
}

export default BookList;
