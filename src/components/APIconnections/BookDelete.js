import Axios from 'axios';

const BookDelete = (bookId) => {
    Axios.delete(`https://localhost:7121/books/${bookId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("Book deleted successfully.");
          }
        })
        .catch((err) => console.log(err));
}

export default BookDelete;