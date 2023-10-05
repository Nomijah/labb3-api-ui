import Axios from 'axios';

const BookDelete = (bookId) => {
    return new Promise ((resolve, reject) => {

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
            resolve();
        })
        .catch((err) => {
            console.log(err);
            reject(err);
        });
    });
}

export default BookDelete;