import { Divider, Toolbar, useTheme } from "@mui/material";
import { PageTitle } from "../text/title/PageTitle";

const PageHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Toolbar>
        <PageTitle
          variant="h6"
          gutterBottom
          sx={{ marginLeft: theme.spacing(-3) }}
        >
          {title}
        </PageTitle>
      </Toolbar>
      <Divider />
    </>
  );
};

export default PageHeader;
