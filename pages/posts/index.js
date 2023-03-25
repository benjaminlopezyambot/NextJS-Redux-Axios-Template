import getPosts from "@/store/actions/PostActions/getPosts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostList);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
