import Axios from 'axios';

const BookPut = (bookToUpdate) => {
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
        })
        .catch((err) => console.log(err));
}

export default BookPut;