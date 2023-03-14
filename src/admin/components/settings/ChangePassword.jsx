import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { favicon, logo } from "../imagepath";
import SidebarNav from "../sidebar";
import SelectField from "../commoncomponent/selectfield";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { change_password } from "../../../api/apiClass/woundmend.class";

const schema = yup
  .object({
    current_password: yup.string().required("Current password is required"),
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

const ChangePassword = () => {
  const [eye, seteye] = useState(true);
  const [eye1, seteye1] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [loading, setLoading] = useState(false);
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

  const onSubmit = async (values) => {
    console.log("values", values);
    try {
      setLoading(true);
      const response = await change_password({
        ...values,
      });
      if (response?.data?.message === "Data update successfully") {
        toast.success(response?.data?.message);
        history.push("/admin");
      }
      setLoading(false);
      toast.error(response?.data?.message);
    } catch (error) {
      console.log(error);
    }
  };
  const onEyeClick = () => {
    seteye(!eye);
  };
  const onEyeClick1 = () => {
    seteye1(!eye1);
  };
  const onEyeClick2 = () => {
    seteye2(!eye2);
  };

  return (
    <>
      <SidebarNav />
      <ToastContainer />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="page-title">Settings</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/admin/settings">Settings</Link>
                  </li>
                  <li className="breadcrumb-item active">Change Password</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Settings Menu */}
              <div className="settings-menu-links">
                <ul className="nav nav-tabs menu-tabs">
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/settings">
                      General Settings
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link
                      className="nav-link"
                      to="/admin/settings/change-password"
                    >
                      Change Password
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Settings Menu */}
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body pt-0">
                      <div className="card-header">
                        <h5 className="card-title">Change Password</h5>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-focus">
                          <label className="focus-label">
                            Current Password
                          </label>
                          <Controller
                            name="current_password"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <div className="pass-group">
                                <input
                                  type={eye ? "password" : "text"}
                                  className={`form-control floating  ${
                                    errors?.current_password
                                      ? "error-input"
                                      : ""
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

                          <small>{errors?.current_password?.message}</small>
                        </div>
                        <div className="form-group form-focus">
                          <label className="focus-label">Password</label>
                          <Controller
                            name="password"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <div className="pass-group">
                                <input
                                  type={eye1 ? "password" : "text"}
                                  className={`form-control floating  ${
                                    errors?.password ? "error-input" : ""
                                  }`}
                                  value={value}
                                  onChange={onChange}
                                  autoComplete="false"
                                />
                                <span
                                  onClick={onEyeClick1}
                                  className={`fa toggle-password" ${
                                    eye1 ? "fa-eye-slash" : "fa-eye"
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
                          <label className="focus-label">
                            Confirm Password
                          </label>
                          <Controller
                            name="password_confirmation"
                            control={control}
                            render={({ field: { value, onChange } }) => (
                              <div className="pass-group">
                                <input
                                  className={`form-control floating  ${
                                    errors?.password_confirmation
                                      ? "error-input"
                                      : ""
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

                          <small>
                            {errors?.password_confirmation?.message}
                          </small>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default ChangePassword;
