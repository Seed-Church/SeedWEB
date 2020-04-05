import React, { useState } from "react";

import { Router, Switch, Route , Redirect} from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

import FormRegister from "../components/Members/FormRegister";
import DashBoard from "../components/Members/DashBoard";
import FormMemorize from "../components/FormMemorize";

import generateComponentWithMainLayout from "../hoc/generateComponentWithMainLayout";

const history = createBrowserHistory();


const FormRegisterWithLayout = generateComponentWithMainLayout(FormRegister);
const DashBoardWithLayout = generateComponentWithMainLayout(DashBoard);
const FormMemorizeWithLayout = generateComponentWithMainLayout(FormMemorize);

export default () => (
    <Router history={history}>
        <Route exact path="/dashboard"  component={DashBoardWithLayout} />
        <Route exact path="/add" component={FormRegisterWithLayout} />
        <Route exact path="/memorize" component={FormMemorizeWithLayout} />
        {/* <Redirect from="/" to="/dashboard" /> */}
    </Router>
);
