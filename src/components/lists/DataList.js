import { Grid, Typography, useTheme } from "@mui/material";

const DataList = ({ emptyMessage, listItems, orientation }) => {
  const theme = useTheme();
  if (listItems.length === 0) {
    return (
      <>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ marginY: theme.spacing(3) }}
        >
          {emptyMessage}
        </Typography>
      </>
    );
  }
  return (
    <Grid direction={orientation} container>
      {listItems.map((item) => item)}
    </Grid>
  );
};

export default DataList;
