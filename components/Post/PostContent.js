import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export default function PostContent({ post }) {
  const postDetail = post?.posts?.posts;
  return (
    <>
      {postDetail?.map((post, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <Card
            elevation={2}
            sx={{
              minWidth: 250,
              ":hover": {
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 0 15px 0 rgba(245, 39, 145, 0.6)",
              },
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
                📰 Post #{post?.id}
              </Typography>
              <Typography sx={{ mb: 1.5 }} id="OneLineEllipsis" variant="h5">
                {post?.title}
              </Typography>
              <Typography
                colo="text.secondary"
                id="TwoLineEllipsis"
                variant="caption"
              >
                {post?.body}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" color="warning">
                Comments 🍺
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
