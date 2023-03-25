import PostContent from "@/components/Post/PostContent";
import getPosts from "@/store/actions/PostActions/getPosts";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch();
  const PostList = useSelector((state) => state.PostList);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      direction="row"
      sx={{ height: "100vh" }}
    >
      <PostContent post={PostList} />
    </Grid>
  );
}
