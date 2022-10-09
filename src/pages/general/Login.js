import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
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
              variant="h4"
              component="h1"
              textAlign="center"
              gutterBottom
            >
              Sign In
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
            <Divider
              sx={{
                margin: theme.spacing(3, 0),
              }}
            />
            <MuiLink href="/reset" underline="none">
              Forgot Password?
            </MuiLink>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Login;
