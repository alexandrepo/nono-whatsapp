import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';
const Item = () => {
  return (
    <Card>
      <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Box>
          <Skeleton animation="wave" height={10} width="40%" />
        </Box>
        <Box>
          <Skeleton animation="wave" height={20} width="90%" />
          <Skeleton animation="wave" height={20} width="70%" />
        </Box>

        <Box>
          <Box display="flex" gap={1} flexGrow={1}>
            <Skeleton animation="wave" height={20} width="10%" />
            <Skeleton animation="wave" height={20} width="15%" />
            <Skeleton animation="wave" height={20} width="25%" />
            <Skeleton animation="wave" height={20} width="12%" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export const WhatsAppListLoader = () => {
  return (
    <Grid container alignItems="stretch" justifyContent="center" gap={1}>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
      <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5}>
        <Item />
      </Grid>
    </Grid>
  );
};
