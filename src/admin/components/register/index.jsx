import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { emailrgx } from "../../assets/constant";
import { facebook, google, logo, twitter } from "../imagepath";
import FeatherIcon from "feather-icons-react";
import { register } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    first_name: yup.string().required("First Name is Required"),
    last_name: yup.string().required("Last Name is Required"),
    email: yup
      .string()
      .matches(emailrgx, "Email is required")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const [eye, seteye] = useState(true);
  const [eye2, seteye2] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log("data", values);
    setLoading(true);

    dispatch(register({ ...values, type: "clinic" }))
      .unwrap()
      .then((response) => {
        if (response?.results?.token) {
          history.push(`/admin/verify-email/${response?.results?.token}`);
        }
        setLoading(false);
        setError(response?.user?.message);
        response?.message?.email.map((item) => {
          toast.error(item);
        });
      })
      .catch((error) => {
        setError(error?.message);
        console.log("error", error);
      });
  };
  const onEyeClick = () => {
    seteye(!eye);
  };
  const onEyeClick2 = () => {
    seteye2(!eye2);
  };
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        <div className="header d-none">
          {/* Header Menu */}
          <ul className="nav nav-tabs user-menu">
            {/* Flag */}
            <li className="nav-item">
              <Link to="#" id="dark-mode-toggle" className="dark-mode-toggle">
                <i className="light-mode">
                  <FeatherIcon icon="sun" />
                </i>
                <i className="dark-mode">
                  <FeatherIcon icon="moon" />
                </i>
              </Link>
            </li>
            {/* /Flag */}
          </ul>
          {/* Header Menu */}
        </div>
        <div className="row">
          <ToastContainer />
          {/* Login Banner */}
          <div className="col-md-6 login-bg">
            <div className="login-banner" />
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </div>
                <h3>Getting Started</h3>
                <p className="account-subtitle">Register with email</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group form-focus">
                    <label className="focus-label">First Name</label>
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.first_name ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      // defaultValue="Clinic"
                    />

                    <small>{errors?.first_name?.message}</small>
                  </div>
                  <div className="form-group form-focus">
                    <label className="focus-label">Last Name</label>
                    <Controller
                      name="last_name"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.last_name ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      // defaultValue="Clinic"
                    />

                    <small>{errors?.last_name?.message}</small>
                  </div>
                  <div className="form-group form-focus">
                    <label className="focus-label">Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.email ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      // defaultValue="admin@dreamguys.co.in"
                    />

                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="form-group form-focus">
                    <label className="focus-label">Password</label>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input
                            type={eye ? "password" : "text"}
                            className={`form-control floating  ${
                              errors?.password ? "error-input" : ""
                            }`}
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                          <span
                            onClick={onEyeClick}
                            className={`fa toggle-password" ${
                              eye ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </div>
                      )}
                      // defaultValue="123456"
                    />

                    <small>{errors?.password?.message}</small>
                  </div>
                  <div className="form-group form-focus">
                    {/* <input type="password" className="form-control floating" /> */}
                    <label className="focus-label">Confirm Password</label>
                    <Controller
                      name="password_confirmation"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input
                            className={`form-control floating  ${
                              errors?.password_confirmation ? "error-input" : ""
                            }`}
                            type={eye2 ? "password" : "text"}
                            value={value}
                            onChange={onChange}
                            autoComplete="false"
                          />
                          <span
                            onClick={onEyeClick2}
                            className={`fa toggle-password" ${
                              eye2 ? "fa-eye-slash" : "fa-eye"
                            }`}
                          />
                        </div>
                      )}
                      // defaultValue=""
                    />

                    <small>{errors?.password_confirmation?.message}</small>
                  </div>
                  {/* <div className="form-group">
                    <div className="row">
                      <div className="col-12">
                        <label className="custom_check mr-2 mb-0">
                          {" "}
                          I agree to the{" "}
                          <Link to="#" className="text-primary">
                            {" "}
                            terms of service
                          </Link>{" "}
                          and{" "}
                          <Link to="#" className="text-primary">
                            privacy policy
                          </Link>
                          <input type="checkbox" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div> */}
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                      )}
                      Register
                    </button>
                  </div>
                  <div className="dont-have">
                    Already have an account?{" "}
                    <Link to="/admin/login">Login</Link>
                  </div>
                  <div className="login-or">
                    <span className="or-line" />
                    <p className="span-or">or login with </p>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <Link to="#">
                      <img src={google} className="img-fluid" alt="Logo" />
                    </Link>
                    <Link to="#">
                      <img src={facebook} className="img-fluid" alt="Logo" />
                    </Link>
                    <Link to="#">
                      <img src={twitter} className="img-fluid" alt="Logo" />
                    </Link>
                  </div>
                  {/* /Social Login */}
                </form>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Register;
