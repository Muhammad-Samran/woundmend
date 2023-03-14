import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Home from "./components/home";
//blog
import BlogGrid from "./components/blog/bloggrid";
import BlogDetails from "./components/blog/blogdetails";
//pages
import Terms from "./components/pages/terms";
import Policy from "./components/pages/policy";

const ClientAppUniversal = function (props) {
  return (
    <Router>
      <div>
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          <Route path="/home" exact component={Home} />
          {/* blog */}
          <Route path="/blog" exact component={BlogGrid} />
          <Route path="/blog/blog-details" exact component={BlogDetails} />
          {/* pages */}
          <Route path="/terms" exact component={Terms} />
          <Route path="/privacy-policy" exact component={Policy} />
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </div>
    </Router>
  );
};

export default ClientAppUniversal;
