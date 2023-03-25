import { Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

export default function PostContentSkeleton() {
  return (
    <>
      {Array.from(new Array(12)).map((item, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <Skeleton
            variant="rectangular"
            width={250}
            height={250}
            sx={{ borderRadius: 2 }}
          />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </>
  );
}
