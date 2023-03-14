import React, { useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";
import { Appcontext } from "../../../approuter";

const SidebarNav = (props) => {
  let pathname = props.location.pathname;
  const { isAuth, setIsAuth } = useContext(Appcontext);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    console.log(value);
    setSideMenuNew(value);
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className={`mt-4 ${pathname === "/admin" ? "active" : ""}`}>
                  <Link to="/admin">
                    <i>
                      <FeatherIcon icon="grid" />
                    </i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                {/* <li
                  className={pathname.includes("doctor-list") ? "active" : ""}
                >
                  <Link to="/admin/doctor/listing">
                    <i>
                      <FeatherIcon icon="user-plus" />
                    </i>{" "}
                    <span>Doctors</span>
                  </Link>
                </li> */}
                <li className="submenu">
                  <Link
                    // to="#"
                    className={isSideMenu == "doctors" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "doctors" ? "" : "doctors")
                    }
                  >
                    <i>
                      <FeatherIcon icon="user-plus" />
                    </i>
                    <span> Doctors</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "doctors" ? (
                    <ul
                      style={{
                        display: isSideMenu == "doctors" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admin/doctor/listing"
                          className={
                            pathname.includes("doctor/listing") ? "active" : ""
                          }
                        >
                          List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/doctor/add"
                          className={
                            pathname.includes("doctor/add") ? "active" : ""
                          }
                        >
                          Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/doctor/appointment/listing"
                          className={
                            pathname.includes("appointment/listing")
                              ? "active"
                              : ""
                          }
                        >
                          Appointments
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li className="submenu">
                  <Link
                    // to="#"
                    className={isSideMenu == "patients" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "patients" ? "" : "patients")
                    }
                  >
                    <i>
                      <FeatherIcon icon="users" />
                    </i>
                    <span> Patients</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "patients" ? (
                    <ul
                      style={{
                        display: isSideMenu == "patients" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admin/patient/listing"
                          className={
                            pathname.includes("patient/listing") ? "active" : ""
                          }
                        >
                          List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/patient/add"
                          className={
                            pathname.includes("patient/add") ? "active" : ""
                          }
                        >
                          Add
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/doctor/appointment/listing"
                          className={
                            pathname.includes("appointment/listing")
                              ? "active"
                              : ""
                          }
                        >
                          Appointments
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li className="submenu">
                  <Link
                    // to="#"
                    className={isSideMenu == "reports" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                    }
                  >
                    <i>
                      <FeatherIcon icon="file-text" />
                    </i>
                    <span> Reports</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "reports" ? (
                    <ul
                      style={{
                        display: isSideMenu == "reports" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/admin/appointmentrepot"
                          className={
                            pathname.includes("appointmentrepot")
                              ? "active"
                              : ""
                          }
                        >
                          Appointment Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/incomerepot"
                          className={
                            pathname.includes("incomerepot") ? "active" : ""
                          }
                        >
                          Income Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/invoicerepot"
                          className={
                            pathname.includes("invoicerepot") ? "active" : ""
                          }
                        >
                          Invoice Report
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/admin/userrepots"
                          className={
                            pathname.includes("userrepots") ? "active" : ""
                          }
                        >
                          Users Report
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="menu-title">
                  <span>Clinic</span>
                </li>
                <li className={pathname.includes("profile") ? "active" : ""}>
                  <Link to="/admin/profile">
                    <i>
                      <FeatherIcon icon="user" />
                    </i>{" "}
                    <span>Profile</span>
                  </Link>
                </li>
                <li className={pathname.includes("settings") ? "active" : ""}>
                  <Link to="/admin/settings">
                    <i>
                      <FeatherIcon icon="sliders" />
                    </i>{" "}
                    <span> Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default withRouter(SidebarNav);
