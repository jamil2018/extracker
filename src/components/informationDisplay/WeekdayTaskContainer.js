import { Card, CardContent } from "@mui/material";

const WeekdayTaskContainer = ({ children }) => {
  return (
    <Card sx={{ width: "100%" }} variant="outlined">
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default WeekdayTaskContainer;
