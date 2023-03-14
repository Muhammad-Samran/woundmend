import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const options = [
  { path: "/admin/profile", icon: "user", title: "Profile" },
  { path: "/admin/doctor/listing", icon: "user-plus", title: "Doctors" },
  { path: "/admin/patient/listing", icon: "users", title: "Patients" },
  {
    path: "/admin/transactions-list",
    icon: "credit-card",
    title: "Transactions",
  },

  {
    path: "/admin/doctor/appointment/listing",
    icon: "calendar",
    title: "Appointments",
  },
  { path: "/admin/settings", icon: "sliders", title: "Settings" },
];
const index = () => {
  return (
    <>
      {options?.map((item, index) => (
        <div className="col-xl-4 d-flex">
          <div className="spl-items flex-fill">
            <Link to={item.path}>
              <i>
                <FeatherIcon icon={item.icon} />
              </i>
              <h6>{item.title}</h6>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
