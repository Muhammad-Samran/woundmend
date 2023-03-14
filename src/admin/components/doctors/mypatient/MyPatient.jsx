import React from "react";
import { Link } from "react-router-dom";
import config from "config";

const MyPatient = ({ data }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card widget-profile pat-widget-profile">
              <div className="card-body">
                <div className="pro-widget-content">
                  <div className="profile-info-widget">
                    <Link className="booking-doc-img">
                      <img
                        src={
                          data?.clinic_doctor_patient?.profile_image
                            ? `${config.appUrl}${data?.clinic_doctor_patient?.profile_image}`
                            : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                        }
                        alt="User"
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>
                        <Link to="/doctor/patient-profile">
                          {data?.clinic_doctor_patient?.full_name}
                        </Link>
                      </h3>
                      <div className="patient-details">
                        <h5>
                          <b>Patient ID :</b> {data?.clinic_doctor_patient?.id}
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {data?.clinic_doctor_patient?.address}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="patient-info">
                  <ul>
                    <li>
                      Phone{" "}
                      <span>{data?.clinic_doctor_patient?.contact_number}</span>
                    </li>
                    <li>
                      Date of Birth{" "}
                      <span>{data?.clinic_doctor_patient?.dob}</span>
                    </li>
                    <li>
                      Gender <span>{data?.clinic_doctor_patient?.gender}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPatient;
