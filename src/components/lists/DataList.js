import { Typography, useTheme } from "@mui/material";

const DataList = ({ emptyMessage, listItems }) => {
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
  return <>{listItems.map((item) => item)}</>;
};

export default DataList;
