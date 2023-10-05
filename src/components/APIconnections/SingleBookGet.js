import Axios from "axios";

const singleBookGet = (id, afterComplete) => {
  Axios.get(`https://localhost:7121/books/${id}`).then((res) => {
    console.log(res);
    afterComplete(res.data);
  });
};

export default singleBookGet;
