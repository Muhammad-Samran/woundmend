import React from "react";

import SidebarNav from "../../sidebar";
import { avatar02 } from "../../imagepath";
import "../../../assets/css/style.css";

const WoundDetails = () => {
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-md-6">
              <div className="doc-info-left">
                    <div className="doctor-img">
                      <img src={avatar02} className="img-fluid" alt="User" />
                    </div>
                    <div className="doc-info-cont">
                      <h4 className="doc-name">#4 - Pressure - Stage3</h4>
                      <p className="doc-speciality">
                        Wound
                      </p>
                    </div>
                  </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          {/* /Page Header */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default WoundDetails;
