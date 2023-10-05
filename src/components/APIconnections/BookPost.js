import Axios from 'axios';

const BookPost = (bookToCreate) => {
    Axios.post("https://localhost:7121/books", JSON.stringify(bookToCreate), {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
        //   console.log(res);
          if (res.status === 200) {
            alert("Book added to library");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            alert(
              "The book you tried to add already exists in the library database"
            );
          }
        });

}

export default BookPost;