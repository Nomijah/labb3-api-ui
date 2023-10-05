import Axios from 'axios';

const BookPost = (bookToCreate) => {
    return new Promise((resolve, reject) => {
    Axios.post("https://localhost:7121/books", JSON.stringify(bookToCreate), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
        console.log(res);
        if (res.status === 200) {
            alert("Book added to library");
        }
        resolve(); // Resolve the promise when the request is successful
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            alert(
              "Error: The book you tried to add is already in the library or the data was incorrectly entered."
            );
          }
          reject(err); // Reject the promise if there's an error
        });
    });

}

export default BookPost;