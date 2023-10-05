import Axios from 'axios';

const BookPut = (bookToUpdate) => {
    return new Promise((resolve, reject) => {
    Axios.put("https://localhost:7121/books/", JSON.stringify(bookToUpdate), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("Book updated");
          }
          resolve(); // Resolve the promise when the request is successful
        })
        .catch((err) => {
            console.log(err);
            reject(err); // Reject the promise if there's an error
        });
    });
}

export default BookPut;