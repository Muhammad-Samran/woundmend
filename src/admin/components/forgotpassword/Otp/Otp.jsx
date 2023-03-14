import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { logo } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import { OTP } from "../../../../api/apiClass/woundmend.class";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    otp: yup.string().required("Otp is Required"),
  })
  .required();

const Otp = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const Email = location?.state?.email;

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
    try {
      setLoading(true);
      const response = await OTP({
        ...values,
        email: Email,
      });
      if (response?.data?.message === "Otp verified Successfuly") {
        toast.success(response?.data?.message);
        console.log(response);

        history.push({
          pathname: "/admin/updatepassword",
          state: {
            ...values,
            email: Email,
          },
        });
      }
      setLoading(false);
      (response?.data?.message?.otp.map((e)=>{
        toast.error(e)
      }))
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
                <p>Check Your Email and Enter OTP Code</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group form-focus">
                    <label className="focus-label">Enter OTP Code</label>
                    <Controller
                      name="otp"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.otp ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue=""
                    />

                    <small>{errors?.otp?.message}</small>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                      )}
                      Verify OTP
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

export default Otp;
