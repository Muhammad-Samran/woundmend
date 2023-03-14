import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  calender,
  cardio,
  chart,
  dental,
  flag01,
  flag02,
  flag03,
  flag04,
  flag05,
  neurology,
  ortho,
  urology,
} from "../imagepath";
import SidebarNav from "../sidebar";
import Appointments from "./appointment";
import Consultation from "./Consultation/Consultation";
import IncomeReport from "./IncomeReport/IncomeReport";
import RecentActivities from "./RecentActivities/RecentActivities";
import TodayAppointment from "./TodayAppointment/TodayAppointment";
import TopDoctors from "./TopDoctors/TopDoctors";
import Menu from "./menu";
import Counters from "./counters";
import Select from "react-select";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Dashboard = () => {
  const options = [
    { value: "This Week", label: "This Week" },
    { value: "This Month", label: "This Month" },
  ];
  const options1 = [
    { value: "Patients", label: "Patients" },
    { value: "Doctors", label: "Doctors" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const settings = {
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    arrow: "true",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    width: 400,
    dots: false,
    autoplay: false,
    infinite: "true",
    speed: 500,
    items: 5,
    slidestoshow: 5,
    slidestoscroll: 1,
    centerpadding: "15px",
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
        margin: 10,
      },
      576: {
        items: 2,
        margin: 15,
      },
      768: {
        items: 2,
        margin: 15,
      },
      992: {
        items: 2,
        margin: 15,
      },
      1170: {
        items: 2,
        margin: 15,
      },
      1550: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className="main-wrapper">
        <SidebarNav />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid pb-0">
            <h4 className="mb-3">Overview</h4>

            <div className="row">
              <Counters />
            </div>
            <div className="row">
              <Menu />
            </div>
            <div className="row">
              <Appointments />
              <IncomeReport />
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
};

export default Dashboard;
