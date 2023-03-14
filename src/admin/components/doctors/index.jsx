import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";
import { Modal, Button } from "react-bootstrap";
import {
  avatar02,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  doctor09,
  sort,
} from "../imagepath";
import DoctorsTable from "./DoctorsTable";
import config from "config";
import InviteDoctor from "./InviteDoctor";
import {
  getDoctor,
  getdoctordetails,
} from "../../../api/apiClass/woundmend.class";
import DoctorDetail from "./DoctorDetail";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorsDetail, setDoctorsDetail] = useState();
  const [show2, setShow2] = useState(false);
  const [update, setUpdate] = useState(false);
  const history = useHistory();

  const toggleFilterMenu2 = () => {
    console.log(show2);
    setShow2(!show2);
  };

  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    console.log(show1);
    setShow1(!show1);
  };

  useEffect(() => {
    const doctorlist = async () => {
      try {
        const response = await getDoctor();
        // console.log("response", response?.data?.results);
        setDoctors(response?.data?.results);
      } catch (e) {
        console.log(e);
      }
    };
    doctorlist();
  }, [update]);

  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          {/* /Page Header */}
          {/* Doctor List */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title">Doctors</h5>
                    </div>
                    <div className="col-auto d-flex flex-wrap">
                      <div className="form-custom me-2">
                        <div id="tableSearch" className="dataTables_wrapper" />

                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#addModal"
                          className="btn btn-primary btn-add"
                          // onClick={()=>handleShow('addModal')}
                        >
                          Invite
                        </Link>
                      </div>
                      <div className="form-custom me-2">
                        <div id="tableSearch" className="dataTables_wrapper" />

                        <Link
                          to="/admin/doctor/add"
                          className="btn btn-primary btn-add"
                          // onClick={()=>handleShow('addModal')}
                        >
                          Add Doctor
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {doctors?.length > 0 ? (
                  <DoctorsTable
                    data={doctors}
                    setUpdate={setUpdate}
                    setDoctorsDetail={setDoctorsDetail}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div id="tablepagination" className="dataTables_wrapper" />
            </div>
          </div>
          {/* /Doctor List */}
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* <!-- Modal --> */}
      <InviteDoctor />

      {/* Modal */}
      {/* <!-- Modal --> */}
      {doctorsDetail?.uuid ? (
        <DoctorDetail doctorsDetail={doctorsDetail} />
      ) : (
        <></>
      )}

      {/* <!-- /Modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade contentmodal"
        id="editModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header">
              <h3 className="mb-0">Edit Doctor</h3>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <i className="">
                  <FeatherIcon icon="x-circle" />
                </i>
              </button>
            </div>
            <div className="modal-body">
              <form action={`${config.publicPath}admin/doctor-list`}>
                <div className="add-wrap">
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Dr. Rayan miller"
                    />
                    <label className="focus-label">
                      Doctor Name <span className="text-danger">*</span>
                    </label>
                  </div>
                  <label className="mb-1">Doctor Image</label>
                  <div className="change-photo-btn">
                    <div>
                      <i className="">
                        <FeatherIcon icon="upload" />
                      </i>
                      <p>Upload File</p>
                    </div>
                    <input type="file" className="upload" />
                    <span className="file-upload-text"></span>
                  </div>
                  <p className="file-name text-success">
                    Successfully Product image.jpg uploaded{" "}
                    <a href="#" className="text-danger">
                      <i className="">
                        <FeatherIcon icon="x" />
                      </i>
                    </a>
                  </p>
                  <div className="form-group">
                    <select className="select">
                      <option>Select Speciality</option>
                      <option>Dentist</option>
                      <option defaultValue>Neurology</option>
                    </select>
                  </div>
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="$330.00"
                    />
                    <label className="focus-label">
                      Consultation Fees <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="Newyork, USA"
                    />
                    <label className="focus-label">
                      Location <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="form-group form-focus">
                    <input
                      type="text"
                      className="form-control floating"
                      defaultValue="+1 5454 2154 4545"
                    />
                    <label className="focus-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                  </div>
                  <div className="submit-section">
                    <button type="submit" className="btn btn-primary btn-save">
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade contentmodal"
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <div className="modal-header border-bottom-0 justify-content-end">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="">
                  <FeatherIcon icon="x-circle" />
                </i>
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-wrap text-center">
                <form action={`${config.publicPath}admin/doctor-list`}>
                  <div className="del-icon">
                    <i className="">
                      <FeatherIcon icon="x-circle" />
                    </i>
                  </div>
                  <h2>Sure you Want to delete</h2>
                  <p>“Doctor”</p>
                  <div className="submit-section">
                    <button type="submit" className="btn btn-success me-2">
                      Yes
                    </button>
                    <a
                      href="#"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      No
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Modal --> */}
    </>
  );
};

export default Doctors;
