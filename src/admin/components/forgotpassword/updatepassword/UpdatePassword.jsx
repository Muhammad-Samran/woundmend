import React, { useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alphaNumericPattern, emailrgx } from "../../../assets/constant";
import { facebook, google, logo, twitter } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { Update_password } from "../../../../api/apiClass/woundmend.class";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum"),
    password_confirmation: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const UpdatePassword = (props) => {
  const [eye, seteye] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const Email = location?.state?.email;
  const Otp = location?.state?.otp;
  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      setLoading(true);
      const response = await Update_password({
        ...values,
        email: Email,
        otp: Otp,
      });
      if (response?.data?.message === "Password updated successfully") {
        toast.success("Password Updated");
        history.push("/admin/login");
      }
      setLoading(false);
      toast(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
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
                <h3>Update Password</h3>
                <p className="account-subtitle">New Password</p>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                      )}
                      Update Password
                    </button>
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

export default UpdatePassword;
