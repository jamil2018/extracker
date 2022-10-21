import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import GridData from "../../components/informationDisplay/GridData";
import { Subtitle } from "../../components/text/title/Subtitle";
import PageHeader from "../../components/userPage/PageHeader";

const UserProfile = () => {
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
          <Card>
            <CardContent>
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

export default UserProfile;
