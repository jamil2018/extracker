import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormTextField from "../../components/form/FormTextField";

const Login = () => {
  const theme = useTheme();
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "80vh",
        }}
      >
        <Card variant="outlined" sx={{ width: "20vw" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h1"
              textAlign="center"
              gutterBottom
            >
              Login
            </Typography>
            <Divider
              sx={{
                marginBottom: theme.spacing(3),
              }}
            />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form>
                <FormTextField
                  label="Username"
                  name="username"
                  type="text"
                  size="small"
                  fullWidth
                />
                <FormTextField
                  label="Password"
                  name="password"
                  type="password"
                  size="small"
                  fullWidth
                />
                <Button variant="contained" type="submit" fullWidth>
                  Submit
                </Button>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Login;
