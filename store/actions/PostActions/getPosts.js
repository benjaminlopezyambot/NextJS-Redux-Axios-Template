import { GET_POSTS, POSTS_ERROR } from "@/store/types";
import axios from "axios";

export default function getPosts() {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POSTS_ERROR,
        payload: console.log(err),
      });
    }
  };
}
