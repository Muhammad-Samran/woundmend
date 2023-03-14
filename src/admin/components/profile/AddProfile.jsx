import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";

import { avatar02 } from "../imagepath";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { UpdateProfileApi } from "../../../api/apiClass/woundmend.class";
import { useSelector } from "react-redux";
import config from "config";
import { useHistory } from "react-router-dom";

const AddProfile = ({ type }) => {
  const auth = useSelector((state) => state.auth);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const initialValues = {
    first_name: auth?.user?.first_name || "",
    last_name: auth?.user?.last_name || "",
    contact_number: auth?.user?.contact_number || "",
    gender: auth?.user?.gender || "",
    dob: auth?.user?.dob || "",
    city: auth?.user?.city || "",
    state: auth?.user?.state || "",
    country: auth?.user?.country || "",
    address: auth?.user?.address || "",
    postcode: auth?.user?.postcode || "",
  };
  const createSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    contact_number: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    postcode: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      const response = await UpdateProfileApi({
        ...values,
        profile_image: file,
      });
      if (response?.data?.message == "Profile updated successfully") {
        history.push("/admin/profile");
      }
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className={type == "card" ? null : "page-wrapper"}>
        <div className="content container-fluid content-wrap">
          {/* Profile Information */}
          <Formik
            initialValues={initialValues}
            validationSchema={createSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
              resetForm,
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="setting-info profile-info">
                      {type == "card" ? <></> : <h4>Personal Information</h4>}

                      <label
                        className="avatar profile-cover-avatar"
                        htmlFor="avatar_upload"
                      >
                        {file ? (
                          <img src={URL?.createObjectURL(file)} alt="User" />
                        ) : auth?.user?.profile_image ? (
                          <img
                            src={`${config.appUrl}${auth?.user?.profile_image}`}
                            alt="User"
                          />
                        ) : null}
                        <input
                          type="file"
                          id="avatar_upload"
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            setFile(e.target.files[0]);
                          }}
                        />
                        <span className="avatar-edit">
                          <i>
                            <FeatherIcon icon="edit" />
                          </i>
                        </span>
                      </label>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            className="form-control"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={values.first_name}
                          />
                          <span className="spanerror">
                            {errors.first_name && touched.first_name && (
                              <div>{errors.first_name}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={values.last_name}
                          />
                          <span className="spanerror">
                            {errors.last_name && touched.last_name && (
                              <div>{errors.last_name}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Contact Number</label>
                          <input
                            type="text"
                            name="contact_number"
                            className="form-control"
                            placeholder="Contact Number"
                            onChange={handleChange}
                            value={values.contact_number}
                          />
                          <span className="spanerror">
                            {errors.contact_number &&
                              touched.contact_number && (
                                <div>{errors.contact_number}</div>
                              )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Gender</label>
                          <select
                            className="form-select form-control"
                            name="gender"
                            onChange={handleChange}
                            value={values.gender}
                          >
                            <option>Please Select...</option>
                            <option>male</option>
                            <option>female</option>
                          </select>

                          <span className="spanerror">
                            {errors.gender && touched.gender && (
                              <div>{errors.gender}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Date of Birth</label>
                          <div className="cal-icon">
                            <input
                              type="date"
                              name="dob"
                              className="form-control datetimepicker"
                              placeholder="Date of Birth"
                              onChange={handleChange}
                              value={values.dob}
                            />
                          </div>
                          <span className="spanerror">
                            {errors.dob && touched.date && (
                              <div>{errors.dob}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="city"
                            onChange={handleChange}
                            value={values.city}
                          />
                          <span className="spanerror">
                            {errors.city && touched.city && (
                              <div>{errors.city}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            className="form-control"
                            placeholder="State"
                            onChange={handleChange}
                            value={values.state}
                          />
                          <span className="spanerror">
                            {errors.state && touched.state && (
                              <div>{errors.state}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            className="form-control"
                            placeholder="Country"
                            onChange={handleChange}
                            value={values.country}
                          />
                          <span className="spanerror">
                            {errors.country && touched.country && (
                              <div>{errors.country}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Post Code</label>
                          <input
                            type="text"
                            name="postcode"
                            className="form-control"
                            placeholder="Post Code"
                            onChange={handleChange}
                            value={values.postcode}
                          />
                          <span className="spanerror">
                            {errors.postcode && touched.postcode && (
                              <div>{errors.postcode}</div>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Address"
                            onChange={handleChange}
                            value={values.address}
                          />
                          <span className="spanerror">
                            {errors.address && touched.address && (
                              <div>{errors.address}</div>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="submit-sec d-flex justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleSubmit}
                            >
                              {loading && (
                                <span
                                  className="spinner-border spinner-border-sm me-2"
                                  role="status"
                                ></span>
                              )}
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          {/* /Profile Information */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default AddProfile;
