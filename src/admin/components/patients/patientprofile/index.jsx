import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import { Tabs, Tab } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from "./img";
import MyComponent from "./mycomponent";
import SidebarNav from "../../sidebar";
import "../../../../client/assets/css/style.css"
import InProgressTable from "./InProgressTable";
// import MyPatient from "../mypatient/MyPatient";

const PatientProfile = (props) => {
  const [show, setShow] = useState(false);
  const [videocall, setvideocall] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(false);
  const [photoIndex, setphotoIndex] = useState(false);
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
                <h3 className="page-title">Patient Profile</h3>
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
                    <img src={IMG01} className="img-fluid" alt="User" />
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">Patient Name</h4>
                    <p className="doc-speciality">
                      BDS, MDS - Oral & Maxillofacial Surgery
                    </p>
                    <div className="clinic-details">
                      <p className="doc-location">
                        <i className="fas fa-map-marker-alt"></i> Newyork, USA -{" "}
                        <a href="#">Get Directions</a>
                      </p>
                      <SimpleReactLightbox>
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
                      </SimpleReactLightbox>
                    </div>
                 
                  </div>
                </div>
                {/* <div className="doc-info-right">
                  <div className="clini-infos">
                    <ul>
                      <li>
                        <i className="far fa-thumbs-up"></i> 99%
                      </li>
                      <li>
                        <i className="far fa-comment"></i> 35 Feedback
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i> Newyork, USA
                      </li>
                      <li>
                        <i className="far fa-money-bill-alt"></i> $100 per hour{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-action">
                    <a href="#" className="btn btn-white fav-btn">
                      <i className="far fa-bookmark"></i>
                    </a>
                    <Link
                      to="/doctor/chat-doctor"
                      className="btn btn-white msg-btn"
                    >
                      <i className="far fa-comment-alt"></i>
                    </Link>

                    <a
                      href="#"
                      className="btn btn-white call-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="fas fa-phone"></i>
                    </a>
                    <a
                      href="#"
                      className="btn btn-white call-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#video_call"
                    >
                      <i className="fas fa-video"></i>
                    </a>
                  </div>
                  <div className="clinic-booking">
                    <Link to="/admin/doctor/booking" className="apt-btn">
                      Book Appointment
                    </Link>
                  </div>
                </div> */}
              </div>
            <div className="card mt-2">
              <div className="card-body pt-0 user-tabs">
                <Tabs
                  className="nav nav-tabs nav-tabs-bottom nav-justified"
                  activeKey={state.key}
                  onSelect={setisOpen}
                  id="controlled-tab-example"
                >
                  <Tab className="nav-item" eventKey={1} title="In Progress Evaluation">
                    <InProgressTable />
                  </Tab>
                  <Tab className="nav-item" eventKey={2} title="Completed Evaluations">
                    <InProgressTable />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* modal hmlFor video*/}
        <div className="modal fade call-modal" id="voice_call">
          <div className="modal-dialog modal-dialog-centered" role="document">
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
          <div className="modal-dialog modal-dialog-centered" role="document">
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

export default PatientProfile;
