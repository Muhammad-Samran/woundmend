import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";

import { avatar02 } from "../imagepath";
import { useSelector } from "react-redux";
import config from "config";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <>
      <SidebarNav />

      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Profile Information */}
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-6">
              <div className="profile-info">
                <h4>My Profile</h4>
                <div className="profile-img">
                  <div className="profile-detail">
                    <label className="avatar profile-cover-avatar">
                      <img
                        src={
                          auth?.user?.profile_image
                            ? `${config.appUrl}${auth?.user?.profile_image}`
                            : avatar02
                        }
                        alt="User Image"
                        className="avatar-img"
                      />
                    </label>
                    <div className="pro-name">
                      <p>{auth?.user?.email}</p>
                      <h4>{`${auth?.user?.first_name} ${auth?.user?.last_name}`}</h4>
                    </div>
                    <Link to="/admin/profile/edit" className="edit-pro">
                      <i>
                        <FeatherIcon icon="edit" />
                      </i>{" "}
                      Edit
                    </Link>
                  </div>
                  <div className="profile-list">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <h5>Date of Birth</h5>
                        <p>{auth?.user?.dob}</p>
                      </div>
                      <div className="col-md-4 mb-3">
                        <h5>Gender</h5>
                        <p>{auth?.user?.gender}</p>
                      </div>
                      <div className="col-md-12">
                        <h6 className="pro-title">Address &amp; Location</h6>
                      </div>
                      <div className="col-md-4">
                        <h5>Address</h5>
                        <p>{auth?.user?.address}</p>
                      </div>
                      <div className="col-md-4">
                        <h5>Country</h5>
                        <p>{auth?.user?.country}</p>
                      </div>
                      <div className="col-md-4">
                        <h5>State</h5>
                        <p>{auth?.user?.state}</p>
                      </div>
                      <div className="col-md-4">
                        <h5>Post Code</h5>
                        <p>{auth?.user?.postcode}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-list">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pro-title d-flex justify-content-between">
                        <h6>Account Information</h6>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Email Address</h5>
                      <p>{auth?.user?.email}</p>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h5>Phone Number</h5>
                      <p>{auth?.user?.contact_number}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Profile Information */}
        </div>
      </div>
    </>
  );
};

export default Profile;
