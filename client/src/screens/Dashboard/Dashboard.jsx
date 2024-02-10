import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardNav from "../../components/Header/DashboardNav";
import DashboardComponent from "../../components/Dashboard/Dashboard";
import SwitchTabs from "../../components/Dashboard/SwitchTabs";
import Navbar from "../../components/Profile/Navbar";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <DashboardNav />
      <div>
        {/* <DashboardComponent /> */}
        <Navbar />
        <SwitchTabs />
      </div>
    </div>
  );
};

export default Dashboard;
