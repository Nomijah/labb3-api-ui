import Axios from "axios";

const singleBookGet = (id) => {
  return new Promise((resolve, reject) => {
    Axios.get(`https://localhost:7121/books/${id}`).then((res) => {
      console.log(res);
      resolve(res);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
  });
};

export default singleBookGet;
