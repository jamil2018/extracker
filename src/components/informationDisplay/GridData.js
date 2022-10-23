import { Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const GridData = ({ labels, values, spacing }) => {
  const theme = useTheme();
  return (
    <>
      <Grid container justifyContent="center" gap={spacing}>
        <Grid item>
          <Box>
            {labels.map((label) => (
              <Typography
                variant="subtitle1"
                textAlign="left"
                sx={{ fontWeight: theme.typography.fontWeightBold }}
                color="primary"
              >
                {label}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item>
          <Box>
            {values.map((value) => (
              <Typography variant="subtitle1" textAlign="left">
                {value}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GridData;
