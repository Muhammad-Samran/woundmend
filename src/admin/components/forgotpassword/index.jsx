import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { logo } from "../imagepath";
import { alphaNumericPattern, emailrgx } from "../../assets/constant";
import { ForgetPasswords } from "../../../api/apiClass/woundmend.class";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const schema = yup
    .object({
      email: yup
        .string()
        .matches(emailrgx, "Email is required")
        .required("Email is required")
        .trim(),
    })
    .required();
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
      const response = await ForgetPasswords({
        ...values,
      });
      setLoading(false);
      toast.error(response?.message);
      if (response?.data?.message === "Otp send Successfuly") {
        // navigate("/verifyOTP", { state: { email: values?.email } });
        history.push({
          pathname: "/admin/otp",
          state: {
            ...values,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
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
                <i className="feather-sun light-mode" />
                <i className="feather-moon dark-mode" />
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
            {/* Restart Password */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </div>
                <h3>Reset Password</h3>
                <p className="account-subtitle">
                  Enter Your Email to Get a Password Reset Code
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group form-focus">
                    <label className="focus-label">Enter Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.email ? "error-input" : ""
                          }`}
                          type="email"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue=""
                    />

                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                      )}
                      Send email
                    </button>
                  </div>
                  {/* /Social Login */}
                </form>
              </div>
            </div>
            {/* /Restart Password */}
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default ForgotPassword;
