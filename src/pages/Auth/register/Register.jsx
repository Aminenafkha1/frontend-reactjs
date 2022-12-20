import React from "react";
// Imported Icons ==========>
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "../../../hooks/useAuth";

const Register = () => {

  const { signup } = useAuth();

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
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
              const res = await signup(values);

              console.log(res);
              // setTimeout(() => {
              //     alert(JSON.stringify(values, null, 2));
              //     setSubmitting(false);
              // }, 400);
            }}
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
              <form className="register">
                <div className="register__field">
                  <i className="register__icon fas fa-user">
                    <AiOutlineUser />
                  </i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="FirstName"
                    name="name"
                  />
                </div>

                <div className="register__field">
                  <i className="register__icon fas fa-user">
                    <AiOutlineUser />
                  </i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="LastName"
                    name="lastname"
                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fas fa-user">
                    <MdEmail />
                  </i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Email"
                    name="email"

                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fas fa-user">
                    <MdEmail />
                  </i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Tel"
                    name="tel"

                  />
                </div>

                <div className="register__field">
                  <i className="register__icon fas fa-user">
                    <MdEmail />
                  </i>
                  <input
                    type="text"
                    className="register__input"
                    placeholder="Work"
                    name="work"

                  />
                </div>
                <div className="register__field">
                  <i className="register__icon fas fa-lock">
                    <RiLockPasswordLine />
                  </i>
                  <input
                    type="password"
                    className="register__input"
                    placeholder="Password"
                    name="password"

                  />
                </div>

                <button className="button register__submit">
                  <span className="button__text">Sign Up</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            )}
          </Formik>

          {/* <div className="social-register">
            <p></p>
            <h3>log in via</h3>
            <div className="social-icons">
              <a href="#" className="social-register__icon fab fa-instagram">
                <BsInstagram />
              </a>
              <a href="#" className="social-register__icon fab fa-facebook">
                <BsFacebook />
              </a>
              <a href="#" className="social-register__icon fab fa-twitter">
                <BsTwitter />
              </a>
            </div>
          </div> */}
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

export default Register;
