import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import SidebarNav from "../../sidebar";
import Icon from '@material-ui/core/Icon';
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

const ViewProfile = () => {
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
           
          </div>
          {/* /Page Header */}
          {/* Blank Page */}
          <div className="row">
            <div className="col-sm-12">Contents here</div>
          </div>
          {/* /Blank Page */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default ViewProfile;
