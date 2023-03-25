import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function PostContent({ post }) {
  const postDetail = post?.posts;
  return (
    <>
      {postDetail?.map((post, idx) => (
        <Grid mt={2} mr item xs={12} sm={6} md={4} lg={3} key={idx}>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                #{post?.id}
              </Typography>
              <Typography variant="h5" component="div">
                {post?.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                User #{post?.userId}
              </Typography>
              <Typography variant="body2">{post?.body}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
