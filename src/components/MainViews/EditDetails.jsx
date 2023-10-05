import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Body";
import singleBookGet from "../APIconnections/SingleBookGet";
import Loading from "../Messages/Loading";
import BookPut from "../APIconnections/BookPut";

function EditDetails({ id }) {
  const [bookToUpdate, setBookToUpdate] = useState({});
  const [viewState, setViewState] = useContext(Context);
  const [loading, setLoading] = useState(true);

  // Fetch book details
  const afterComplete = (resData) => {
    setBookToUpdate(resData.result);
    setLoading(false);
  };
  useEffect(() => {
    singleBookGet(id, afterComplete);
  }, []);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    year: "",
    genre: "",
    description: "",
    isAvailable: false,
  });

  useEffect(() => {
    setFormData({
      id: bookToUpdate.id || "", // Provide default values to prevent errors
      title: bookToUpdate.title || "",
      author: bookToUpdate.author || "",
      year: bookToUpdate.year || "",
      genre: bookToUpdate.genre || "",
      description: bookToUpdate.description || "",
      isAvailable: bookToUpdate.isAvailable || false, // Default to false for a checkbox
    });
  }, [bookToUpdate]);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleCheckBox = () => {
    setFormData({ ...formData, isAvailable: !formData.isAvailable });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      id: formData.id,
      title: formData.title,
      author: formData.author,
      year: parseInt(formData.year),
      genre: formData.genre,
      description: formData.description,
      isAvailable: formData.isAvailable,
    };

    BookPut(updatedBook);

    setViewState({ view: "list", id: 0 });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit} className="w-50 px-5">
          <h3 className="mt-3">Update book</h3>
          <div className="mt-2">
            <label htmlFor="title" className="h5 form-label">
              Title
            </label>
            <input
              value={formData.title}
              id="title"
              name="title"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="author" className="h5 form-label">
              Author
            </label>
            <input
              value={formData.author}
              id="author"
              name="author"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="year" className="h5 form-label">
              Year
            </label>
            <input
              value={formData.year}
              id="year"
              name="year"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="genre" className="h5 form-label">
              Genre
            </label>
            <input
              value={formData.genre}
              id="genre"
              name="genre"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="description" className="h5 form-label">
              Description
            </label>
            <input
              value={formData.description}
              id="description"
              name="description"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label className="h5 form-check-label">
              Is available{" "}
              <input
                checked={formData.isAvailable}
                value={formData.isAvailable}
                name="isAvailable"
                type="checkbox"
                className="form-check-input ms-1"
                onChange={handleCheckBox}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success mb-2">
            Submit
          </button>
          <button
            type="button"
            onClick={() => setViewState({ view: "list", id: 0 })}
            className="btn btn-warning mb-2 ms-2"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default EditDetails;
