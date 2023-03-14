import React, { useState } from "react";

import SidebarNav from "../../sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AddDoctorApi } from "../../../../api/apiClass/woundmend.class";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const AddPatient = () => {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    gender: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    address: "",
    postcode: "",
  };
  const createSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
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
      const response = await AddDoctorApi({
        ...values,
        type: "patient",
        profile_image: file,
      });
      console.log(response);
      response?.data?.message?.email?.map((e) => {
        toast.error(e);
        setLoading(false);
      });
      toast.success(response?.data?.message);
      setLoading(false);
      if (response?.data?.message == "User saved invited successfully") {
        history.push("/admin/doctor/listing");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Add Patient</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="card">
            <div className="card-body">
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
                    <div className="row form-row">
                      <ToastContainer />
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                          <div className="change-avatar">
                            <div className="profile-img">
                              {file && (
                                <img
                                  src={URL?.createObjectURL(file)}
                                  alt="User"
                                />
                              )}
                            </div>
                            <div className="upload-img">
                              <div className="change-photo-btn">
                                <span>
                                  <i className="fa fa-upload"></i> Upload Photo
                                </span>
                                <input
                                  type="file"
                                  className="upload"
                                  onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setFile(e.target.files[0]);
                                  }}
                                />
                              </div>
                              <small className="form-text text-muted">
                                Allowed JPG, GIF or PNG. Max size of 2MB
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
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
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                          />
                          <span className="spanerror">
                            {errors.email && touched.email && (
                              <div>{errors.email}</div>
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
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                        onClick={handleSubmit}
                      >
                        {loading && (
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          ></span>
                        )}
                        Create Patient
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default AddPatient;
