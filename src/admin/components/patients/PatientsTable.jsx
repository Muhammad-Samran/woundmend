import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import config from "config";
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
} from "../imagepath";
import { ChangeStatus, getpatientdetails } from "../../../api/apiClass/woundmend.class";

const PatientsTable = ({ data, setUpdate, setPatientsDetail }) => {
  const handleStatusChange = async (id) => {
    try {
      const response = await ChangeStatus({ id: id });
      if (response?.data?.message == "update successfully") {
        setUpdate((old) => old + 1);
      }
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const patientdetail = async (id) => {
    try {
      const response = await getpatientdetails({ patient_id: id });
      setPatientsDetail(response?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.organization_patient.id,
      sortable: true,
      width: "150px",
    },

    {
      name: "patient",
      sortable: true,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <h2
              className="table-avatar"
              onClick={() => patientdetail(row?.organization_patient?.id)}
            >
              <Link
                className="avatar avatar-sm me-2 user-dt"
                to="#"
                data-bs-target="#patientlist"
                data-bs-toggle="modal"
              >
                <img
                  className="avatar avatar-img"
                  src={
                    row?.organization_patient?.profile_image
                      ? `${config.appUrl}${row?.organization_patient?.profile_image}`
                      : avatar02
                  }
                  alt="User Image"
                />
              </Link>
            </h2>
            <Link
              to="#"
              data-bs-target="#patientlist"
              data-bs-toggle="modal"
            ></Link>
            <span className="user-name">
              {row?.organization_patient?.full_name}
            </span>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },

    {
      name: "Member Since",
      selector: (row) => row?.organization_patient?.member_since,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <div>
              <span className="d-block">
                {row?.organization_patient?.member_since}
              </span>
            </div>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },
    {
      name: "Email",
      selector: (row) => row?.organization_patient?.email,
      cell: (row) => (
        <Media>
          <Media.Body className="d-flex">
            <div>
              <span className="d-block">
                {row?.organization_patient?.email}
              </span>
            </div>
          </Media.Body>
        </Media>
      ),
      width: "250px",
    },

    {
      name: "Account status",
      selector: (row) => row?.organization_patient?.status,
      sortable: true,
      cell: (row) => (
        <label
          className="toggle-switch"
          htmlFor={row?.organization_patient?.status}
        >
          <input
            type="checkbox"
            className="toggle-switch-input"
            id={row?.organization_patient?.status}
            defaultChecked={row?.organization_patient?.status}
            onChange={() => handleStatusChange(row?.organization_patient?.id)}
          />
          <span className="toggle-switch-label">
            <span className="toggle-switch-indicator" />
          </span>
        </label>
      ),
      width: "250px",
    },
  ];

  const tableData = {
    columns,
    data,
    print: false,
    filter: true,
    export: true,
    filterPlaceholder: "Search Patient",
  };
  return (
    <div className="card-body p-0">
      <div className="table-responsive">
        <DataTableExtensions {...tableData}>
          <DataTable
            className="datatable table table-borderless hover-table"
            id="data-table"
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </div>
  );
};

export default PatientsTable;
