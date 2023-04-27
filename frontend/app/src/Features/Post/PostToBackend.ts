import axios from "axios";

const PostToBackend = async (postText:string) => {
    const locationCode = localStorage.getItem("userLocationCode");

    console.log("postText: " + postText);

    const Axios = axios.create({
        baseURL: "http://localhost:8000/",
        withCredentials: true,
        headers: {
          "Content-type": "Application/json",
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });

    const api = axios.create({  
        baseURL: "http://localhost:8000/api",
        withCredentials: true,
        headers: {
          "Content-type": "Application/json",
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      });

      await Axios.get("/sanctum/csrf-cookie");

    // TODO ユーザーがログインしていない場合の処理を追加する

    const response = await api.post("/post/store", {
        'spot_id': locationCode,
        'user_id': 1,
        'content': postText,
    });

    console.log(response.data);
};

export default PostToBackend;
