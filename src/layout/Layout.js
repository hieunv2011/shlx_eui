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
  EuiHideFor,
  EuiPageTemplate,
  EuiPageSection,
  EuiPageHeader,
  EuiDataGrid,
} from "@elastic/eui";
import { Trainees } from "../pages";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import '@elastic/eui/dist/eui_theme_dark.css';
import '@elastic/eui/dist/eui_theme_light.css';

const data = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
  { id: 4, name: "David", age: 40, email: "david@example.com" },
];

// Define the columns for the data grid
const columns = [
  {
    id: "id",
    displayAsText: "ID",
    defaultSortDirection: "asc",
  },
  {
    id: "name",
    displayAsText: "Name",
    defaultSortDirection: "asc",
  },
  {
    id: "age",
    displayAsText: "Age",
    defaultSortDirection: "asc",
  },
  {
    id: "email",
    displayAsText: "Email",
    defaultSortDirection: "asc",
  },
];

const Layout = () => {
  const toggleSide = () => setShowSide(!showSide);
  const [showSide, setShowSide] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const currentPath = window.location.pathname;
  const [sideBar, setSidebar] = useState(true);
  return (
    <div>
      {/* <EuiProvider
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
              <Outlet />
            </div>
            <EuiHideFor sizes={["xs", "s"]}>
              <EuiBottomBar className="text-white flex space-x-4">
                <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
                <h3 className="text-xs">
                  Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
                  Email: shlx@toanphuong.com.vn{" "}
                </h3>
              </EuiBottomBar>
            </EuiHideFor>
          </EuiPageBody>
        </EuiPage>
      </EuiProvider> */}

      {/* Test */}
      <EuiProvider colorMode="dark">
        <EuiPage paddingSize="none">
          {showSide && (
            <EuiPageSidebar className="">
              {/* <SideBar
                navIsOpen={showSide}
                toggleSide={setShowSide}
                onItemClick={(item) => console.log(item)}
              /> */}
              Ê
            </EuiPageSidebar>
          )}
          <EuiPageBody paddingSize="none" panelled={true}>
            <EuiPageSection bottomBorder={sideBar ? true : "extended"}>
              <EuiPageHeader>
                <Header
                  toggleSide={toggleSide}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              </EuiPageHeader>
            </EuiPageSection>
            <EuiPageSection grow>
              <EuiDataGrid
                aria-label="Sample Data Grid"
                columns={columns}
                columnVisibility={{
                  visibleColumns: columns.map((col) => col.id),
                  setVisibleColumns: () => {},
                }}
                rowCount={data.length}
                renderCellValue={({ rowIndex, columnId }) =>
                  data[rowIndex][columnId]
                }
              />
            </EuiPageSection>
            <EuiPageSection grow>
              <EuiHideFor sizes={["xs", "s"]}>
                <EuiBottomBar className="text-white flex space-x-4">
                  <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
                  <h3 className="text-xs">
                    Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
                    Email: shlx@toanphuong.com.vn{" "}
                  </h3>
                </EuiBottomBar>
              </EuiHideFor>
            </EuiPageSection>
          </EuiPageBody>
        </EuiPage>
      </EuiProvider>
    </div>
  );
};

export default Layout;
