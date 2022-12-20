import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

// Imported Icons ==========>
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import { useHistory, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../slices/authSlice";
const Login = () => {
  // const { method } = useAuth();
  // const { login,error } = useAuth();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [ user,setUser]= useState({
  //   email:"",
  //   password:""
  // })
  let navigate = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    console.log(formValue);

    dispatch(loginUser(formValue));

    navigate("/dashboard/profile");
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .max(255)
                .email()
                .required("Email is required"),
              password: Yup.string()
                .min(8)
                .max(255)
                .required("Password is required"),
            })}
            // onSubmit={async (values, { setSubmitting }) => {
            //   console.log(values)
            //   dispatch(loginUser(values))
            //   // setTimeout(() => {
            //   //     alert(JSON.stringify(values, null, 2));
            //   //     setSubmitting(false);
            //   // }, 400);
            // }}

            onSubmit={handleLogin}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <Field
                    name="email"
                    type="text"
                    className="login__input"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  {/* <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  /> */}

                  <Field
                    name="password"
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button className="button login__submit" type="submit">
                  <span className="button__text">
                    {auth?.loginStatus === "pending"
                      ? "Submitting..."
                      : "Log In Now"}
                  </span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </Form>
            )}
          </Formik>

          <div className="social-login">
            <p></p>
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram">
                <BsInstagram />
              </a>
              <a href="#" className="social-login__icon fab fa-facebook">
                <BsFacebook />
              </a>
              <a href="#" className="social-login__icon fab fa-twitter">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
