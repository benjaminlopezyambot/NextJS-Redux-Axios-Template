import PostContent from "@/components/Post/PostContent";
import PostContentSkeleton from "@/components/Skeletons/PostContentSkeleton";
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
      sx={{
        background:
          "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
      }}
      columns={14}
      p={2}
    >
      {PostList?.loading ? (
        <PostContentSkeleton />
      ) : (
        <PostContent post={PostList} />
      )}
    </Grid>
  );
}
