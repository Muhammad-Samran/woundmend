import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { favicon, logo } from "../imagepath";
import SidebarNav from "../sidebar";
import Select2 from "react-select2-wrapper";
import SelectField from "../commoncomponent/selectfield";
import AddProfile from "../profile/AddProfile";

const Settings = () => {
  const [state, setState] = useState([
    { label: "California", value: "California" },
    { label: "Tasmania", value: "Tasmania" },
    { label: "Auckland", value: "Auckland" },
    { label: "Marlborough", value: "Marlborough" },
  ]);
  const [options, setOptions] = useState([
    { label: "Select", value: "" },
    { label: "India", value: "India" },
    { label: "London", value: "London" },
    { label: "France", value: "France" },
    { label: "USA", value: "USA" },
  ]);
  const [stateValue, setStateValue] = useState();
  return (
    <>
      <SidebarNav />
      {/* Hello world */}
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
                  <li className="breadcrumb-item active">General Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Settings Menu */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item active">
                <Link className="nav-link" to="/admin/settings">
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/settings/change-password">
                  Change Password
                </Link>
              </li>
            </ul>
          </div>
          {/* Settings Menu */}
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body pt-0">
                  <div className="card-header">
                    <h5 className="card-title">Personal Information</h5>
                  </div>
                  <AddProfile type="card" />
                </div>
              </div>
            </div>
          </div>
          {/* /Settings */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default Settings;
