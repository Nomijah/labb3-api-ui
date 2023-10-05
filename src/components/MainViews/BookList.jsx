import React, { useContext } from "react";
import DetailsButton from "../Buttons/DetailsButton";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

function BookList({ books, filterType, filterText }) {
  if (!filterType) {
    return (
      <>
        {books.map((data) => (
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

  if (filterType === "title") {
    return (
      <>
        {books
          .filter((b) =>
            b.title.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.year}</td>
              <td>{data.genre}</td>
              <td>{data.isAvailable ? "Yes" : "No"}</td>
              <td key={data.id}>
                <DetailsButton id={data.id} />
                <EditButton id={data.id} />
                <DeleteButton id={data.id} />
              </td>
            </tr>
          ))}
      </>
    );
  }

  if (filterType === "author") {
    return (
      <>
        {books
          .filter((b) =>
            b.author.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.author}</td>
              <td>{data.year}</td>
              <td>{data.genre}</td>
              <td>{data.isAvailable ? "Yes" : "No"}</td>
              <td key={data.id}>
                <DetailsButton id={data.id} />
                <EditButton id={data.id} />
                <DeleteButton id={data.id} />
              </td>
            </tr>
          ))}
      </>
    );
  }
}

export default BookList;
