import { Box, TextField, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { useField } from "formik";

const FormTextField = ({ label, ...props }) => {
  const theme = useTheme();
  const [field, meta] = useField(props);
  return (
    <Box sx={{ marginBottom: theme.spacing(0.7) }}>
      <TextField
        label={label}
        {...field}
        {...props}
        error={meta.touched && meta.error !== null}
      />
      {meta.touched && meta.error ? (
        <Typography variant="subtitle2" color={red[400]}>
          {meta.error}
        </Typography>
      ) : (
        <Typography
          sx={{ visibility: "hidden" }}
          variant="subtitle2"
          color={red[300]}
        >
          Error message
        </Typography>
      )}
    </Box>
  );
};

export default FormTextField;
