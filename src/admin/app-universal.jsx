import React, { useState, useContext, useMemo, useEffect } from "react";
import config from "config";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import PastAppointments from "./components/appointments/PastAppointments";
import Specialities from "./components/specialities";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import ChangePassword from "./components/settings/ChangePassword";
import PaymentSettings from "./components/settings/PaymentSettings";
import EmailSettings from "./components/settings/EmailSettings";
import SocialSettings from "./components/settings/SocialSettings";
import SocialLinks from "./components/settings/SocialLinks";
import SeoSettings from "./components/settings/SeoSettings";
import OthersSettings from "./components/settings/OthersSettings";
import AppointmentReport from "./components/Reports/AppointmentReport/AppointmentReport";
import IncomeReport from "./components/Reports/IncomeReport/IncomeReport";
import UserReports from "./components/Reports/UserReports/UserReports";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";

import Blog from "./components/Blog/blog";
import BlogDetails from "./components/Blog/blogdetails";
import AddBlog from "./components/Blog/addblog";
import EditBlog from "./components/Blog/editblog";
import PendingBlog from "./components/Blog/pendingblog";
import Profile from "./components/profile";
import AddProfile from "./components/profile/AddProfile";
import Error from "./components/error404";
import ErrorPage from "./components/error500";
import BasicInput from "./components/forms/baiscinput";
import FormInput from "./components/forminput";
import FormHorizontal from "./components/formhorizontal";
import FormVertical from "./components/formvertical";
import FormMask from "./components/formask";
import FormValidation from "./components/formvalidation";
import BlankPage from "./components/blankpage";
import Components from "./components/component";
import DataTables from "./components/datatables";
import BasicTables from "./components/basictables";
import Pastappointments from "./components/appointments/PastAppointments";

import { Appcontext } from "../approuter";
import AddDoctor from "./components/doctors/adddoctor/AddDoctor";
import ViewProfile from "./components/doctors/viewprofile/ViewProfile";
import DoctorProfile from "./components/doctors/doctorprofile";
import Booking from "./components/doctors/booking/Booking";
import AddPatient from "./components/patients/addpatient/AddPatient";
import PatientProfile from "./components/patients/patientprofile";
import WoundDetails from "./components/patients/wounddetails/WoundDetails";

const AppUniversal = function (props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const userType = JSON.parse(localStorage.getItem("user"));

  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = useLocation();

  useEffect(() => {
    if (
      location?.pathname == "/admin/login" ||
      location?.pathname == "/admin/register" ||
      location?.pathname == "/admin/forgotPassword" ||
      location?.pathname == "/admin/lockscreen" ||
      location?.pathname == "/admin/conform-email" ||
      location?.pathname == "/admin/verify-email" ||
      location?.pathname == "/admin/verify-email/:verifyToken" ||
      location?.pathname == "/admin/updatepassword" ||
      location?.pathname == "/admin/otp" ||
      location?.pathname == "/admin/404" ||
      location?.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location]);

  return (
    <Router basename={`${config.publicPath}`}>
      <div>
        {isAuth !== "admin" && (
          <Route
            render={(props) => (
              <Header {...props} onMenuClick={(value) => toggleMobileMenu()} />
            )}
          />
        )}

        {token && userType ? (
          <Switch>
            <Route path="/admin" exact component={Dashboard} />
            <Route
              path="/admin/doctor/appointment/listing"
              exact
              component={Appointments}
            />
            <Route
              path="/pastappointments"
              exact
              component={PastAppointments}
            />
            <Route path="/admin/specialities" exact component={Specialities} />
            <Route path="/admin/doctor/listing" exact component={Doctors} />
            <Route path="/admin/doctor/add" exact component={AddDoctor} />
            <Route
              path="/admin/doctor/profile"
              exact
              component={DoctorProfile}
            />
            <Route path="/admin/doctor/booking" exact component={Booking} />
            <Route path="/admin/patient/listing" exact component={Patients} />
            <Route path="/admin/patient/add" exact component={AddPatient} />
            <Route
              path="/admin/patient/profile"
              exact
              component={PatientProfile}
            />
            <Route path="/admin/wound/details" exact component={WoundDetails} />
            <Route path="/admin/reviews" exact component={Reviews} />
            <Route
              path="/admin/transactions-list"
              exact
              component={Transaction}
            />
            <Route path="/admin/settings" exact component={Settings} />
            <Route
              path="/admin/settings/change-password"
              exact
              component={ChangePassword}
            />
            <Route
              path="/admin/payment-settings"
              exact
              component={PaymentSettings}
            />
            <Route
              path="/admin/email-settings"
              exact
              component={EmailSettings}
            />
            <Route
              path="/admin/social-settings"
              exact
              component={SocialSettings}
            />
            <Route path="/admin/social-links" exact component={SocialLinks} />
            <Route path="/admin/seo-settings" exact component={SeoSettings} />
            <Route
              path="/admin/others-settings"
              exact
              component={OthersSettings}
            />
            <Route
              path="/admin/appointmentrepot"
              exact
              component={AppointmentReport}
            />
            <Route path="/admin/incomerepot" exact component={IncomeReport} />
            <Route path="/admin/invoicerepot" exact component={InvoiceReport} />
            <Route path="/admin/userrepots" exact component={UserReports} />
            <Route path="/admin/blog" exact component={Blog} />
            <Route path="/admin/blog-details" exact component={BlogDetails} />
            <Route path="/admin/add-blog" exact component={AddBlog} />
            <Route path="/admin/edit-blog" exact component={EditBlog} />
            <Route path="/admin/pending-blog" exact component={PendingBlog} />
            <Route path="/admin/profile" exact component={Profile} />
            <Route path="/admin/profile/edit" exact component={AddProfile} />
            {/* <Route path="/admin/invoice" exact component={Invoice} /> */}

            <Route path="/admin/404" exact component={Error} />
            <Route path="/admin/500" exact component={ErrorPage} />
            <Route path="/admin/blank-page" exact component={BlankPage} />
            <Route path="/admin/components" exact component={Components} />
            <Route path="/admin/basic-input" exact component={BasicInput} />
            <Route path="/admin/form-input-group" exact component={FormInput} />
            <Route
              path="/admin/form-horizontal"
              exact
              component={FormHorizontal}
            />
            <Route path="/admin/form-vertical" exact component={FormVertical} />
            <Route path="/admin/form-mask" exact component={FormMask} />
            <Route
              path="/admin/form-validation"
              exact
              component={FormValidation}
            />
            <Route path="/admin/tables-basic" exact component={BasicTables} />
            <Route path="/admin/data-tables" exact component={DataTables} />

            <Route
              path="/admin/doctor/appointment/past"
              exact
              component={Pastappointments}
            />
          </Switch>
        ) : location?.pathname == "/admin/login" ||
          location?.pathname == "/admin/register" ||
          location?.pathname == "/admin/forgotPassword" ||
          location?.pathname == "/admin/lockscreen" ||
          location?.pathname == "/admin/conform-email" ||
          location?.pathname == "/admin/verify-email" ||
          location?.pathname == "/admin/verify-email/:verifyToken" ||
          location?.pathname == "/admin/updatepassword" ||
          location?.pathname == "/admin/otp" ||
          location?.pathname == "/admin/404" ||
          location?.pathname == "/admin/500" ? null : (
          (window.location.href = "/admin/login")
        )}
      </div>
    </Router>
  );
};

export default AppUniversal;
