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
import InfoCard from "../../components/informationDisplay/InfoCard";
import BarChart from "../../components/informationDisplay/BarChart";
import { WORKDAYS } from "../../constants/chartConstants";
import { generateChartDataset } from "../../utils/chartUtils";

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
      <Grid
        container
        justifyContent="space-between"
        sx={{ marginTop: theme.spacing(6) }}
        gap={2}
      >
        <Grid item xs={3.8}>
          <Card variant="outlined" sx={{ height: theme.spacing(46) }}>
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
                  marginBottom: theme.spacing(1.5),
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
        <Grid item xs={3.8}>
          <InfoCard title="Total Hours Worked Today" value={6.5} />
        </Grid>
        <Grid item xs={3.8}>
          <InfoCard title="Total Hours Worked This Week" value={36.5} />
        </Grid>
        <Grid item xs={7.9}>
          <Card variant="outlined">
            <CardContent>
              <BarChart
                chartTitle="Weekly Time Entry"
                labels={WORKDAYS}
                legendPosition="top"
                datasets={[
                  generateChartDataset(
                    "Hours Worked",
                    [8.5, 7.5, 8, 9, 6],
                    theme.palette.primary.main
                  ),
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3.8}>
          <InfoCard title="Target Work Hour This Week" value={40.0} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDashboard;
