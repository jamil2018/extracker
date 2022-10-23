import { useTheme } from "@emotion/react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const InfoCard = ({ title, value }) => {
  const theme = useTheme();
  return (
    <Card variant="outlined" sx={{ height: theme.spacing(46) }}>
      <CardContent sx={{ height: "inherit" }}>
        <Grid
          direction="column"
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "inherit" }}
        >
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography color="primary" variant="h2">
            {value}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
