import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
  Link as MuiLink,
  Toolbar,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormTextField } from "../../components";

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
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: theme.spacing(1),
              textDecoration: "none",
            }}
            color={theme.palette.primary.main}
          >
            Extracker
          </Typography>
        </Toolbar>
      </Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "86vh",
        }}
      >
        <Box
          sx={{
            width: "20vw",
            height: "50vh",
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,
          }}
          bgcolor={theme.palette.primary.main}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "inherit" }}
          >
            <Typography
              sx={{
                letterSpacing: theme.spacing(1),
                textDecoration: "none",
              }}
              variant="h4"
              color="white"
              textAlign="center"
              gutterBottom
            >
              Extracker
            </Typography>
            <Typography
              sx={{ letterSpacing: theme.spacing(0.2) }}
              color="white"
              variant="caption"
              textAlign="center"
            >
              Time tracking for professionals
            </Typography>
          </Grid>
        </Box>
        <Card variant="outlined" sx={{ width: "20vw", height: "50vh" }}>
          <CardContent sx={{ height: "100%" }}>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-between"
              sx={{ height: "100%" }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    letterSpacing: theme.spacing(1),
                    textDecoration: "none",
                    marginBottom: theme.spacing(2),
                  }}
                  textAlign="left"
                  color={theme.palette.primary.main}
                >
                  Sign in
                </Typography>
                <Divider
                  sx={{
                    marginBottom: theme.spacing(3),
                  }}
                />
              </Box>
              <Box>
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
              </Box>
              <Box>
                <Divider
                  sx={{
                    margin: theme.spacing(3, 0),
                  }}
                />
                <MuiLink href="/reset" underline="none">
                  Forgot Password?
                </MuiLink>
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container justifyContent="flex-end">
            <Typography
              variant="caption"
              sx={{
                letterSpacing: theme.spacing(0.5),
                textDecoration: "none",
              }}
              color={theme.palette.primary.main}
              textAlign="right"
            >
              copyright &copy;{new Date().getFullYear()} Extracker inc.
            </Typography>
          </Grid>
        </Toolbar>
      </Container>
    </>
  );
};

export default Login;
