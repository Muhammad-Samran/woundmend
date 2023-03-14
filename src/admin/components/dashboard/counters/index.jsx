import React from "react";
import FeatherIcon from "feather-icons-react";
import { calender, chart } from "../../imagepath";

const options = [
  {
    title: "Doctors",
    icon: "user-plus",
    count: "4505",
    progress: "1.15%",
    duration: "last week",
  },
  {
    title: "Patients",
    icon: "users",
    count: "2000",
    progress: "4.5%",
    duration: "last week",
  },
  {
    title: "Appointment",
    image: calender,
    count: "4500",
    progress: "11.15%",
    duration: "last week",
  },
  {
    title: "Revenue",
    image: chart,
    count: "$62523",
    progress: "41.15%",
    duration: "last week",
  },
];

const index = () => {
  return (
    <>
      {options?.map((item, index) => (
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon bg-primary">
                  {item?.image ? (
                    <img src={item?.image} alt="User Image" />
                  ) : (
                    <FeatherIcon icon={item.icon} />
                  )}
                </span>
                <div className="dash-count">
                  <h5 className="dash-title">{item.title}</h5>
                  <div className="dash-counts">
                    <p>{item.count}</p>
                  </div>
                </div>
              </div>
              <p className="trade-level mb-0">
                <span className="text-danger me-1">
                  <i className="fas fa-caret-down me-1" />
                  {item.progress}
                </span>{" "}
                {item.duration}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
