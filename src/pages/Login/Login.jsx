import { useNavigate, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import swal from "sweetalert";
import theme from "../../Coffe-img/theme.png";
import "../../css/login.css";

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email("It must be a valid email")
      .required("* Obligatory field")
      .min(6, "The Email must be at least 6 characters"),
    password: Yup.string()
      .required("* Obligatory field")
      .min(6, "The password must be at least 6 characters"),
  });

const initialValues = {
  email: "",
  password: "",
};

export const getUsuario = async (email, password) => {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URI}/api/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const Login = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!formik.isValid) {
      alert("Please complete all required fields correctly.");
      return;
    }

    getUsuario(formik.values.email, formik.values.password)
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("token", data.token);
        window.location.href = "/menues";
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert("Please verify your email and password.");
        } else {
          alert("An error occurred while trying to log in.");
        }
      });
  };
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <div
        className="cont-form"
        style={{
          backgroundImage: `url(${theme})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Container className="cont-form">
          <Form className="formu" onSubmit={formik.handleSubmit}>
            <h1 className="title-form">Log In</h1>
            <Form.Group className="content-form" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className={
                  formik.errors.email && formik.touched.email && "error"
                }
                maxLength={40}
                minLength={6}
                placeholder="Write your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                value={formik.values.email}
              />
              {formik.errors.email && (
                <div className="errorMessage">{formik.errors.email}</div>
              )}
            </Form.Group>
            <Form.Group className="content-form" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                className={
                  formik.errors.password && formik.touched.password && "error"
                }
                maxLength={40}
                minLength={6}
                type="password"
                placeholder="Write your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && (
                <div className="errorMessage">{formik.errors.password}</div>
              )}
            </Form.Group>
            <Button
              className="button-form"
              style={{ backgroundColor: "#794228", borderStyle: "none" }}
              id="logueo"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              log in
            </Button>
            <NavLink to="/register" className="text2">
              You do not have an account?. sign up here
            </NavLink>
          </Form>
        </Container>
      </div>
    </>
  );
};
