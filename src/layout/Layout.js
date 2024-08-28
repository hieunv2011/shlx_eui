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
  // Trainees,
  TrainningCar,
} from "../pages";
import {
  EuiPageSidebar,
  EuiPage,
  EuiProvider,
  EuiPageBody,
  EuiBottomBar,
} from "@elastic/eui";
import { Trainees } from "../pages";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  const [showSide, setShowSide] = useState("");
  const toggleSide = () => setShowSide(!showSide);
  const [darkMode, setDarkMode] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <EuiProvider
    // colorMode={darkMode ? "dark" : "light"}
    >
      <EuiPage className="">
        {showSide && (
          <EuiPageSidebar className="">
            <SideBar
              navIsOpen={showSide}
              toggleSide={setShowSide}
              onItemClick={(item) => console.log(item)}
            />
          </EuiPageSidebar>
        )}
        <EuiPageBody>
            <Header
              toggleSide={toggleSide}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <div className="bg-white m-8 rounded-xl">
            <Outlet/>
            </div>

            <EuiBottomBar className="text-white flex space-x-4">
              <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
              <h3 className="text-xs">
                Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
                Email: shlx@toanphuong.com.vn{" "}
              </h3>
            </EuiBottomBar>
        </EuiPageBody>
      </EuiPage>
    </EuiProvider>
  );
};

export default Layout;
