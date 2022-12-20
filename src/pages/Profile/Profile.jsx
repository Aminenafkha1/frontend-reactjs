import { ErrorMessage, Field, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, updateMe } from "../../slices/user";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import useIsMountedRef from "../../hooks/useIsMountedRef";
const Profile = () => {
  const isMountedRef = useIsMountedRef();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    tel: "",
    work: "",
  });

  const works = ["s", "developer"];

  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUser());
    }


  }, [status, dispatch]);

  useEffect(() => {
    setValues(user);
  },[user])
 
  // const isAllowed = () => {
  //   if (user?.is_admin_teacher == null || user?.is_admin_teacher === false) {
  //     return false;
  //   }
  //   return true;
  // };

  const handleProfile = (e) => {
    console.log("-------------profile")
    e.preventDefault();
    console.log('va',values)
    // dispatch(updateMe());

  };
  return (
    <div className="editProfile">
      <Formik
        initialValues={{ tel:user.tel, work:user.work }}
        validationSchema={Yup.object().shape({
          name: Yup.string().min(3).required("Name is required"),
          lastname: Yup.string().min(3).required("LastName is required"),
          email: Yup.string().max(255).email().required("Email is required"),
          tel: Yup.number().required("Phone number is required"),
          work: Yup.string().required("Work is required"),

        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            // await login(values.username, values.password);
  
            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
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
          console.log(touched),

          <form className="profile">
            <div className="profile__field">
              <i className="profile__icon fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="text"
                className="profile__input"
                placeholder="FirstName"
                name="name"
                defaultValue={user.name}
              />
            </div>

            <div className="profile__field">
              <i className="profile__icon fas fa-user">
                <AiOutlineUser />
              </i>
              <input
                type="text"
                className="profile__input"
                placeholder="LastName"
                name="lastname"
                defaultValue={user.lastName}
              />
            </div>
            <div className="profile__field">
              <i className="profile__icon fas fa-user">
                <MdEmail />
              </i>
              <input
                type="text"
                className="profile__input"
                placeholder="Email"
                name="email"
                defaultValue={user.email}
              />
            </div>
            <div className="profile__field">
              <i className="profile__icon fas fa-user">
                <MdEmail />
              </i>
              <input
                type="text"
                className="profile__input"
                placeholder="Tel"
                name="tel"
                onChange={handleChange}
                defaultValue={user.tel}
              />
              {touched.tel && errors.tel ? <div className="red" >{errors.tel}</div> : null}

            </div>

            <div className="profile__field">
              <i className="profile__icon fas fa-user">
                <MdEmail />
              </i>
              <select name="work" id="works" value={values.work} className="profile__input"              onChange={handleChange}
>
                {works.map((work) => (
                  <option value={work} >
                    {work}
                  </option>
                ))}
              </select>
            </div>
            <div className="profile__field">
              <i className="profile__icon fas fa-lock">
                <RiLockPasswordLine />
              </i>
              <input
                type="text"
                className="profile__input"
                placeholder="Password"
                name="password"
                defaultValue={user.work}

              />
            </div>

            <button className="button profile__submit">
              <span className="button__text">Edit</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
