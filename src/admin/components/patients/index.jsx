import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";
import { Modal, Button } from "react-bootstrap";
import {
  avatar02,
  avatar03,
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
import PatientsTable from "./PatientsTable";
import InvitePatient from "./InvitePatient";
import { getPatient } from "../../../api/apiClass/woundmend.class";
import PatientDetail from "./PatientDetail";
const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [patientsDetail, setPatientsDetail] = useState();
  const [update, setUpdate] = useState(false);
  const [show2, setShow2] = useState(false);
  const toggleFilterMenu2 = () => {
    console.log(show2);
    setShow2(!show2);
  };

  const [show1, setShow1] = useState(false);
  const toggleFilterMenu1 = () => {
    console.log(show1);
    setShow1(!show1);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => setShow(id);

  useEffect(() => {
    const patientlist = async () => {
      try {
        const response = await getPatient();
        // console.log("response", response?.data?.results);
        setPatients(response?.data?.results);
      } catch (e) {
        console.log(e);
      }
    };
    patientlist();
  }, [update]);
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Patients List */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title">Patients</h5>
                    </div>
                    <div className="col-auto custom-list d-flex">
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
                          to="/admin/patient/add"
                          className="btn btn-primary btn-add"
                          // onClick={()=>handleShow('addModal')}
                        >
                          Add Patient
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <PatientsTable
                  data={patients}
                  setUpdate={setUpdate}
                  setDoctorsDetail={setPatientsDetail}
                />
              </div>
              <div id="tablepagination" className="dataTables_wrapper" />
            </div>
          </div>
          {/* /Patient List */}
        </div>
      </div>
      {/* /Page Wrapper */}

      {/* <!-- Modal --> */}
      <InvitePatient />
      {/* <!-- Modal --> */}
      {patientsDetail?.uuid ? (
        <PatientDetail patientsDetail={patientsDetail} />
      ) : (
        <></>
      )}

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
                <div className="del-icon">
                  <i>
                    <FeatherIcon icon="x-circle" />
                  </i>
                </div>
              </button>
            </div>
            <div className="modal-body">
              <div className="delete-wrap text-center">
                <form action="/admin/patient/listing">
                  <div className="del-icon">
                    <i className="delete-icon">
                      <FeatherIcon icon="x-circle" />
                    </i>
                  </div>
                  <h2>Sure you Want to delete</h2>
                  <p>“Patient”</p>
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

export default Patients;
