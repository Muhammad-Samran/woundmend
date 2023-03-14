import React, { createContext, useState } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from "config";

export const Appcontext = createContext();

const AppRouter = (props) => {
  const [isAuth, setIsAuth] = useState("user");
  return (
    <Appcontext.Provider value={{ isAuth, setIsAuth }}>
      <Router basename={`${config.publicPath}`}>
        <Route render={(props) => <AppContainer {...props} />} />
      </Router>
    </Appcontext.Provider>
  );
};

export default AppRouter;
