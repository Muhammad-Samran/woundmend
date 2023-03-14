import React, { useEffect, useContext } from "react";
import config from "config";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
} from "react-router-dom";

import Home from "./client/components/home/index";

import HomeSlider2 from "./client/components/home/homeslider2";
//blog
import BlogGrid from "./client/components/blog/bloggrid";
import BlogDetails from "./client/components/blog/blogdetails";
//pages
import Terms from "./client/components/pages/terms";
import Policy from "./client/components/pages/policy";
import Aboutus from "./client/components/pages/aboutus/aboutus";
import Contactus from "./client/components/pages/contactus/contactus";

import AppUniversal from "./admin/app-universal";
import Support from "./client/components/pages/howtouse/index.jsx";

import Login from "./admin/components/login";
import Register from "./admin/components/register";
import ForgotPassword from "./admin/components/forgotpassword";
import Otp from "./admin/components/forgotpassword/Otp/Otp";
import UpdatePassword from "./admin/components/forgotpassword/updatepassword/UpdatePassword";
import Lockscreen from "./admin/components/lockscreen";
import VerifyEmail from "./admin/components/verifyEmail";
import ConformEmail from "./admin/components/forgotpassword/ConformEmail";
import { Appcontext } from "./approuter";
import Faqs from "./client/components/pages/faqs/Faqs";
import HowToUse from "./client/components/pages/howtouse/index.jsx";

const AppContainer = function (props) {
  if (props) {
    const url = props.location.pathname.split("/")[1];
    const { isAuth, setIsAuth } = useContext(Appcontext);
    const location = useLocation();

    useEffect(() => {
      if (
        location?.pathname == "/admin/login" ||
        location?.pathname == "/admin/register" ||
        location?.pathname == "/admin/forgotPassword" ||
        location?.pathname == "/admin/lockscreen" ||
        location?.pathname == "/admin/conform-email" ||
        location?.pathname == "/admin/updatepassword" ||
        location?.pathname == "/admin/verify-email" ||
        location?.pathname == "/admin/verify-email/:verifyToken" ||
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
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin/register" exact component={Register} />
          <Route
            path="/admin/forgotPassword"
            exact
            component={ForgotPassword}
          />
          <Route path="/admin/otp" exact component={Otp} />
          <Route
            path="/admin/updatepassword"
            exact
            component={UpdatePassword}
          />
          <Route path="/admin/lockscreen" exact component={Lockscreen} />
          <Route
            path="/admin/verify-email/:verifyToken"
            exact
            component={VerifyEmail}
          />
          <Route path="/admin/conform-email" exact component={ConformEmail} />
        </Switch>
        {isAuth === "user" && url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              {/* home */}
              <Route path="(/|/home)" exact component={Home} />
              <Route path="/homeslider2" exact component={HomeSlider2} />

              {/* blog */}
              <Route path="/blog" exact component={BlogGrid} />
              <Route path="/blog/blog-details" exact component={BlogDetails} />

              {/* pages */}

              <Route path="/aboutus" exact component={Aboutus} />
              <Route path="/contactus" exact component={Contactus} />
              <Route path="/howtouse" exact component={HowToUse} />
              <Route path="/terms" exact component={Terms} />
              <Route path="/privacy-policy" exact component={Policy} />
              <Route path="/faqs" exact component={Faqs} />
            </Switch>
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
