import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import config from "config";
import { doctor09 } from "../imagepath";
import moment from "moment";
import { useHistory } from "react-router-dom";

const DoctorDetail = ({ doctorsDetail }) => {
  const history = useHistory();
  return (
    <>
      <div
        className="modal fade contentmodal"
        id="doctorlist"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header justify-content-center border-bottom-0">
              <h4 className="modal-title">Doctor Details</h4>
              <button
                type="button"
                className="close-btn pos-top"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="">
                  <FeatherIcon icon="x-circle" />
                </i>
              </button>
            </div>
            <div className="modal-body">
              <div className="media d-flex align-items-center justify-content-between">
                <div className="flex-shrink-0 d-flex align-items-center">
                  <img
                    src={
                      doctorsDetail?.profile_image
                        ? `${config.appUrl}${doctorsDetail?.profile_image}`
                        : doctor09
                    }
                    alt=""
                    className="doctor"
                  />
                  <div className="doc-info">
                    <div className="docs-id"> #{doctorsDetail?.id}</div>
                    <h3>Dr. {doctorsDetail?.full_name}</h3>
                    {/* <p>BDS, MDS - Oral & Maxillofacial Surgery</p> */}
                  </div>
                </div>
                {/* <div className="media-body">
                  <div className="ratings">
                    <p>
                      <i className="fas fa-star filled mr-1"></i>4.5
                    </p>
                    {/* <Link to="/admin/doctor/profile" className="btn btn-success">View Profile</Link> */}
                {/* <div className="d-flex justify-content-center">
                      <button
                        className="btn-primary"
                        onClick={() =>
                          (window.location.href = "/admin/doctor/profile")
                        }
                      >
                        View Profile
                      </button>
                    </div> 
                  </div>
                </div> */}
              </div>
              <div className="member-wrapper">
                <h5>Details</h5>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mem-info">
                      <h6>Member Since</h6>
                      <p>
                        {moment(doctorsDetail?.created_at).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mem-info">
                      <h6>Email</h6>
                      <p>{doctorsDetail?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-wrapper">
                <h5>Personal Information</h5>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>Gender</h6>
                      <p>{doctorsDetail?.gender}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>Date of Birth</h6>
                      <p>{doctorsDetail?.dob}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>Phone Number</h6>
                      <p>{doctorsDetail?.contact_number}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>Location</h6>
                      <p>{doctorsDetail?.address}</p>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>City</h6>
                      <p>{doctorsDetail?.city}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>State</h6>
                      <p>{doctorsDetail?.state}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="mem-info">
                      <h6>Country</h6>
                      <p>{doctorsDetail?.country}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="lang-wrap">
                <p>
                  No of Consultation / Cancelled : <span>85/21</span>
                </p>
                <p>
                  Total Income Earned : <span>$4,544,784</span>
                </p>
              </div> */}
              <div className="submit-section">
                <a
                  className="btn btn-primary me-2"
                  data-bs-dismiss="modal"
                  onClick={
                    () =>
                      history.push({
                        pathname: "/admin/doctor/profile",
                        state: {
                          docDetail: doctorsDetail,
                        },
                      })
                    // (window.location.href = "/admin/doctor/profile")
                  }
                >
                  View Profile
                </a>
                {/* <a
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  href="#deleteModal"
                  className="btn btn-secondary"
                >
                  Delete Account
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetail;
