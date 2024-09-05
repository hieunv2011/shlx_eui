import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import {
  Card,
  Course,
  Dat,
  Login,
  Outdoor,
  Session,
  Teacher,
  TrainningCar,
} from "../pages";
import {
  EuiPageSidebar,
  EuiPage,
  EuiProvider,
  EuiPageBody,
  EuiBottomBar,
  EuiHideFor,
  EuiPageTemplate,
  EuiPageSection,
  EuiPageHeader,
  EuiDataGrid,
  EuiButtonIcon,
  EuiThemeProvider,
  EuiText,
} from "@elastic/eui";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";
import Sidebar_test from "../components/Sidebar_test";
import Header from "../components/Header";
// import '@elastic/eui/dist/eui_theme_light.css';
// import '@elastic/eui/dist/eui_theme_dark.css';
import { Footer } from "../components";

// Define the columns for the data grid
const columns = [
  { id: "id", displayAsText: "ID" },
  { id: "name", displayAsText: "Name" },
  { id: "age", displayAsText: "Age" },
  { id: "email", displayAsText: "Email" },
];

const Layout = () => {
  const toggleSide = () => setShowSide(!showSide);
  const [showSide, setShowSide] = useState(false); // set True, mở button ở Header để bật/tắt
  const [darkMode, setDarkMode] = useState(true);
  const currentPath = window.location.pathname;
  const [sideBar, setSidebar] = useState(true);

  return (
    <>
      <EuiPageTemplate paddingSize="none" panelled>
        {showSide && (
          <EuiPageTemplate.Sidebar className="">
            <Sidebar_test
              navIsOpen={showSide}
              toggleSide={setShowSide}
              onItemClick={(item) => console.log(item)}
            />
          </EuiPageTemplate.Sidebar>
        )}
        <EuiPageTemplate.Header bottomBorder={false}>
          <Header
            toggleSide={toggleSide}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </EuiPageTemplate.Header>
        <EuiPageTemplate.Section paddingSize="l" restrictWidth="false">
          <Outlet />
        </EuiPageTemplate.Section>
        <EuiPageTemplate.BottomBar className="text-white flex space-x-4 h-10">
          <EuiHideFor sizes={["xs", "s"]}>
            <Footer />
          </EuiHideFor>
        </EuiPageTemplate.BottomBar>
      </EuiPageTemplate>
    </>
  );
};

export default Layout;
