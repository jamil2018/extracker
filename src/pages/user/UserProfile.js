import { useTheme } from "@mui/material";
import { Subtitle } from "../../components/text/title/Subtitle";
import PageHeader from "../../components/userPage/PageHeader";

const UserProfile = () => {
  const theme = useTheme();
  return (
    <>
      <PageHeader title="Profile" />
      <Subtitle
        sx={{ marginTop: theme.spacing(2) }}
        gutterBottom
        variant="subtitle1"
      >
        Welcome user
      </Subtitle>
    </>
  );
};

export default UserProfile;
