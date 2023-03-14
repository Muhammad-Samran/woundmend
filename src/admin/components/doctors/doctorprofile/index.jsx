import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import { Tabs, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from "./img";
import MyComponent from "./mycomponent";
import SidebarNav from "../../sidebar";
import "../../../../client/assets/css/style.css";
import MyPatient from "../mypatient/MyPatient";
import Reviews from "../reviews";
import config from "config";

const DoctorProfile = (props) => {
  const [show, setShow] = useState(false);
  const [videocall, setvideocall] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(false);
  const [photoIndex, setphotoIndex] = useState(false);
  const location = useLocation();
  const docDetail = location?.state?.docDetail;

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
                <h3 className="page-title">Doctor Profile</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="content">
            <div className="container">
              <div className="">
                <div className="doctor-widget">
                  <div className="doc-info-left">
                    <div className="doctor-img">
                      <img
                        src={
                          docDetail?.profile_image
                            ? `${config.appUrl}${docDetail?.profile_image}`
                            : IMG01
                        }
                        className="img-fluid"
                        alt="User"
                      />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">Dr. {docDetail?.full_name}</h4>
                      <p className="doc-speciality">{docDetail?.email}</p>
                      {/* <p className="doc-department">
                        <img
                          src={IMG02}
                          className="img-fluid"
                          alt="Speciality"
                        />
                        Dentist
                      </p> */}
                      {/* <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div> */}
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {docDetail?.city}, {docDetail?.country}
                          {/* - <a href="#">Get Directions</a> */}
                        </p>
                        {/* <SimpleReactLightbox>
                          <div>
                            <SRLWrapper>
                              <ul className="clinic-gallery">
                                <li>
                                  <a>
                                    <img src={IMG03} alt="Feature" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <img src={IMG04} alt="Feature" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <img src={IMG05} alt="Feature" />
                                  </a>
                                </li>
                                <li>
                                  <a>
                                    <img
                                      src={IMG06}
                                      alt="Feature"
                                      data-attribute="SRL"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </SRLWrapper>
                          </div>
                        </SimpleReactLightbox> */}
                      </div>
                    </div>
                  </div>
                  <div className="doc-info-right">
                    <div className="clini-infos">
                      <ul>
                        <li>
                          <i className="far fa-thumbs-up"></i> 99%
                        </li>
                        <li>
                          <i className="far fa-comment"></i>{" "}
                          {docDetail?.doctor_feedback?.length} Feedback
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {docDetail?.city}, {docDetail?.country}
                        </li>
                        <li>
                          <i className="fas fa-phone"></i>
                          {docDetail?.contact_number}
                        </li>
                      </ul>
                    </div>
                    <div className="clinic-booking">
                      <Link to="/admin/doctor/booking" className="apt-btn">
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card mt-2">
                  <div className="card-body pt-0 user-tabs">
                    <Tabs
                      className="nav nav-tabs nav-tabs-bottom nav-justified"
                      activeKey={state.key}
                      onSelect={setisOpen}
                      id="controlled-tab-example"
                    >
                      <Tab className="nav-item" eventKey={1} title="Overview">
                        <div className="row">
                          <div className="col-md-12 col-lg-9">
                            <div className="widget about-widget">
                              <h4 className="widget-title">About Me</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                            <div className="widget education-widget">
                              <h4 className="widget-title">Education</h4>
                              <div className="experience-box">
                                <ul className="experience-list">
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          American Dental Medical University
                                        </a>
                                        <div>BDS</div>
                                        <span className="time">
                                          1998 - 2003
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          American Dental Medical University
                                        </a>
                                        <div>MDS</div>
                                        <span className="time">
                                          2003 - 2005
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="widget experience-widget">
                              <h4 className="widget-title">
                                Work & Experience
                              </h4>
                              <div className="experience-box">
                                <ul className="experience-list">
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          Glowing Smiles Family Dental Clinic
                                        </a>
                                        <span className="time">
                                          2010 - Present (5 years)
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          Comfort Care Dental Clinic
                                        </a>
                                        <span className="time">
                                          2007 - 2010 (3 years)
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <a href="#/" className="name">
                                          Dream Smile Dental Practice
                                        </a>
                                        <span className="time">
                                          2005 - 2007 (2 years)
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="widget awards-widget">
                              <h4 className="widget-title">Awards</h4>
                              <div className="experience-box">
                                <ul className="experience-list">
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <p className="exp-year">July 2019</p>
                                        <h4 className="exp-title">
                                          Humanitarian Award
                                        </h4>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Proin a
                                          ipsum tellus. Interdum et malesuada
                                          fames ac ante ipsum primis in
                                          faucibus.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <p className="exp-year">March 2011</p>
                                        <h4 className="exp-title">
                                          Certificate For International
                                          Volunteer Service
                                        </h4>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Proin a
                                          ipsum tellus. Interdum et malesuada
                                          fames ac ante ipsum primis in
                                          faucibus.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="experience-user">
                                      <div className="before-circle"></div>
                                    </div>
                                    <div className="experience-content">
                                      <div className="timeline-content">
                                        <p className="exp-year">May 2008</p>
                                        <h4 className="exp-title">
                                          The Dental Professional of The Year
                                          Award
                                        </h4>
                                        <p>
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Proin a
                                          ipsum tellus. Interdum et malesuada
                                          fames ac ante ipsum primis in
                                          faucibus.
                                        </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="service-list">
                              <h4>Services</h4>
                              <ul className="clearfix">
                                <li>Tooth cleaning </li>
                                <li>Root Canal Therapy</li>
                                <li>Implants</li>
                                <li>Composite Bonding</li>
                                <li>Fissure Sealants</li>
                                <li>Surgical Extractions</li>
                              </ul>
                            </div>
                            <div className="service-list">
                              <h4>Specializations</h4>
                              <ul className="clearfix">
                                <li>Children Care</li>
                                <li>Dental Care</li>
                                <li>Oral and Maxillofacial Surgery </li>
                                <li>Orthodontist</li>
                                <li>Periodontist</li>
                                <li>Prosthodontics</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Tab>
                      <Tab className="nav-item" eventKey={3} title="Reviews">
                        {docDetail?.doctor_feedback?.map((item, index) => (
                          <Reviews data={item} />
                        ))}
                        <div className="all-feedback text-center">
                          <a className="btn btn-primary btn-sm">
                            Show all feedback{" "}
                            <strong>
                              {docDetail?.doctor_feedback?.length}
                            </strong>
                          </a>
                        </div>
                      </Tab>
                      <Tab className="nav-item" eventKey={5} title="Patients">
                        {docDetail?.doctor_patient?.map((item, index) => (
                          <MyPatient data={item} />
                        ))}
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            {/* modal hmlFor video*/}
            <div className="modal fade call-modal" id="voice_call">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="call-box incoming-box">
                      <div className="call-wrapper">
                        <div className="call-inner">
                          <div className="call-user">
                            {/* <img alt="User" src={IMG01} className="call-avatar" /> */}
                            <h4>Dr. Darren Elder</h4>
                            <span>Connecting...</span>
                          </div>
                          <div className="call-items">
                            <a
                              href="#"
                              className="btn call-item call-end"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <Icon>call_end</Icon>
                            </a>
                            <Link
                              to="/pages/voice-call"
                              className="btn call-item call-start"
                            >
                              <i className="material-icons">call</i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* modal hmlFor call*/}
            <div className="modal fade call-modal" id="video_call">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="call-box incoming-box">
                      <div className="call-wrapper">
                        <div className="call-inner">
                          <div className="call-user">
                            {/* <img alt="User" src={IMG01} className="call-avatar" /> */}
                            <h4>Dr. Darren Elder</h4>
                            <span>Connecting...</span>
                          </div>
                          <div className="call-items">
                            <a
                              href="#"
                              className="btn call-item call-end"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            >
                              <Icon>call_end</Icon>
                            </a>
                            <Link
                              to="/pages/video-call"
                              className="btn call-item call-start"
                            >
                              <i className="material-icons">call</i>
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default DoctorProfile;
