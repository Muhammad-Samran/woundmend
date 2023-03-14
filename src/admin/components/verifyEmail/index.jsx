import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { logo } from "../imagepath";
import { Appcontext } from "../../../approuter";
import { userverify } from "../../../api/apiClass/woundmend.class";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FeatherIcon from "feather-icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    verification_code: yup.string().required("verification code is required"),
  })
  .required();

const Lockscreen = (props) => {
  const { isAuth, setIsAuth } = useContext(Appcontext);
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);
  const data = useParams();
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
    console.log("code", values);

    setLoading(true);
    userverify(values, data?.verifyToken)
      .then((response) => {
        console.log("response", response);
        if (
          response?.data?.message ===
          "User email verified successfully. Login to continue to access Woundmend"
        ) {
          history.push("/admin/conform-email");
        }
         setError(response?.user?.message);
         response?.data?.message?.verification_code.map((item) => {
           toast.error(item);
         });
        setLoading(false);
      })
      .catch((error) => {
        //  setError(error?.message);
        console.log("error", error);
      });
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
                <p>Enter your verification code to access the portal</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group form-focus">
                    <label className="focus-label">Verification code</label>
                    <Controller
                      name="verification_code"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input
                          className={`form-control floating  ${
                            errors?.verification_code ? "error-input" : ""
                          }`}
                          type="text"
                          value={value}
                          onChange={onChange}
                          autoComplete="false"
                        />
                      )}
                      defaultValue=""
                    />

                    <small>{errors?.verification_code?.message}</small>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                      )}
                      Verify
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

export default Lockscreen;
