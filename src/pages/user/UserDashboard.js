import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { GridData, PageHeader, Subtitle } from "../../components";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const UserDashboard = () => {
  const theme = useTheme();
  return (
    <>
      <PageHeader title="Dashboard" />
      <Subtitle
        sx={{ marginTop: theme.spacing(2) }}
        gutterBottom
        variant="subtitle1"
      >
        Welcome user...
      </Subtitle>
      <Grid container sx={{ marginTop: theme.spacing(6) }}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Grid container justifyContent="flex-end">
                <IconButton>
                  <BorderColorIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid container justifyContent="center">
                <Avatar
                  sx={{ width: theme.spacing(18), height: theme.spacing(18) }}
                >
                  JD
                </Avatar>
              </Grid>
              <Typography
                sx={{ marginY: theme.spacing(2) }}
                textAlign="center"
                variant="h5"
                color="primary"
              >
                John Doe
              </Typography>
              <Divider
                sx={{
                  marginBottom: theme.spacing(2),
                  marginTop: theme.spacing(4),
                }}
              />
              <GridData
                labels={["Designation", "Team"]}
                values={["Software Engineer", "Google"]}
                spacing={6}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default UserDashboard;
