// // import { useEffect, useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   useLocation,
// //   RouterProvider,
// //   Outlet,
// // } from "react-router-dom";
// // import {
// //   Card,
// //   Course,
// //   Dat,
// //   Login,
// //   Outdoor,
// //   Session,
// //   Teacher,
// //   // Trainees,
// //   TrainningCar,
// // } from "../pages";
// // import {
// //   EuiPageSidebar,
// //   EuiPage,
// //   EuiProvider,
// //   EuiPageBody,
// //   EuiBottomBar,
// //   EuiHideFor,
// //   EuiPageTemplate,
// //   EuiPageSection,
// //   EuiPageHeader,
// //   EuiDataGrid,
// //   EuiButtonIcon,
// //   EuiThemeProvider,
// // } from "@elastic/eui";
// // import { motion } from "framer-motion";
// // import SideBar from "../components/Sidebar";
// // import Sidebar_test from "../components/Sidebar_test";

// // import Header from "../components/Header";
// // // import "@elastic/eui/dist/eui_theme_light.css";
// // // import "@elastic/eui/dist/eui_theme_dark.css";

// // const data = [
// //   { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
// //   { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
// //   { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
// //   { id: 4, name: "David", age: 40, email: "david@example.com" },
// // ];

// // // Define the columns for the data grid
// // const columns = [
// //   { id: "id", displayAsText: "ID" },
// //   { id: "name", displayAsText: "Name" },
// //   { id: "age", displayAsText: "Age" },
// //   { id: "email", displayAsText: "Email" },
// // ];

// // const Layout = () => {
// //   const toggleSide = () => setShowSide(!showSide);
// //   const [showSide, setShowSide] = useState("");
// //   const [darkMode, setDarkMode] = useState(true);
// //   const currentPath = window.location.pathname;
// //   const [sideBar, setSidebar] = useState(true);
// //   return (
// //     <div>
// //       <EuiProvider>
// //         <EuiPage paddingSize="none">
// //           {showSide && (
// //             <EuiPageSidebar className="">
// //               {/* <SideBar
// //                 navIsOpen={showSide}
// //                 toggleSide={setShowSide}
// //                 onItemClick={(item) => console.log(item)}
// //               /> */}
// //               {/* <Sidebar_test
// //                 navIsOpen={showSide}
// //                 toggleSide={setShowSide}
// //                 onItemClick={(item) => console.log(item)}
// //               /> */}
// //               <motion.div
// //                 initial={{ x: "-100%" }}
// //                 animate={{ x: showSide ? 0 : "-100%" }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 <Sidebar_test
// //                   navIsOpen={showSide}
// //                   toggleSide={setShowSide}
// //                   onItemClick={(item) => console.log(item)}
// //                 />
// //               </motion.div>
// //             </EuiPageSidebar>
// //           )}
// //           <EuiPageBody paddingSize="none" panelled={true}>
// //             <EuiPageSection bottomBorder={sideBar ? true : "extended"}>
// //               <EuiPageHeader>
// //                 <Header
// //                   toggleSide={toggleSide}
// //                   darkMode={darkMode}
// //                   setDarkMode={setDarkMode}
// //                 />
// //               </EuiPageHeader>
// //             </EuiPageSection>
// //             <EuiPageSection grow>
// //               <Outlet />
// //             </EuiPageSection>
// //             <EuiPageSection grow>
// //               <EuiHideFor sizes={["xs", "s"]}>
// //                 <EuiBottomBar className="text-white flex space-x-4">
// //                   <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
// //                   <h3 className="text-xs">
// //                     Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
// //                     Email: shlx@toanphuong.com.vn{" "}
// //                   </h3>
// //                 </EuiBottomBar>
// //               </EuiHideFor>
// //             </EuiPageSection>
// //           </EuiPageBody>
// //         </EuiPage>
// //       </EuiProvider>
// //     </div>
// //   );
// // };

// // export default Layout;
// import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   RouterProvider,
//   Outlet,
// } from "react-router-dom";
// import {
//   Card,
//   Course,
//   Dat,
//   Login,
//   Outdoor,
//   Session,
//   Teacher,
//   TrainningCar,
// } from "../pages";
// import {
//   EuiPageSidebar,
//   EuiPage,
//   EuiProvider,
//   EuiPageBody,
//   EuiBottomBar,
//   EuiHideFor,
//   EuiPageTemplate,
//   EuiPageSection,
//   EuiPageHeader,
//   EuiDataGrid,
//   EuiButtonIcon,
//   EuiThemeProvider,
// } from "@elastic/eui";
// import { motion } from "framer-motion";
// import SideBar from "../components/Sidebar";
// import Sidebar_test from "../components/Sidebar_test";
// import Header from "../components/Header";

// // Define the columns for the data grid
// const columns = [
//   { id: "id", displayAsText: "ID" },
//   { id: "name", displayAsText: "Name" },
//   { id: "age", displayAsText: "Age" },
//   { id: "email", displayAsText: "Email" },
// ];

// const Layout = () => {
//   const toggleSide = () => setShowSide(!showSide);
//   const [showSide, setShowSide] = useState(false); // Initialize as boolean for simplicity
//   const [darkMode, setDarkMode] = useState(true);
//   const currentPath = window.location.pathname;
//   const [sideBar, setSidebar] = useState(true);

//   return (
//       <EuiProvider>
//         <EuiPage paddingSize="none">
//           {showSide && (
//             <EuiPageSidebar className="">
//               <Sidebar_test
//                 navIsOpen={showSide}
//                 toggleSide={setShowSide}
//                 onItemClick={(item) => console.log(item)}
//               />
//             </EuiPageSidebar>
//           )}

//           <EuiPageBody paddingSize="none" panelled={true}>
//             <EuiPageSection bottomBorder={sideBar ? true : "extended"}>
//               <EuiPageHeader>
//                 <Header
//                   toggleSide={toggleSide}
//                   darkMode={darkMode}
//                   setDarkMode={setDarkMode}
//                 />
//               </EuiPageHeader>
//             </EuiPageSection>
//             <EuiPageSection grow>
//               <Outlet />
//             </EuiPageSection>
//             <EuiPageSection grow>
//               <EuiHideFor sizes={["xs", "s"]}>
//                 <EuiBottomBar className="text-white flex space-x-4">
//                   <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
//                   <h3 className="text-xs">
//                     Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
//                     Email: shlx@toanphuong.com.vn{" "}
//                   </h3>
//                 </EuiBottomBar>
//               </EuiHideFor>
//             </EuiPageSection>
//           </EuiPageBody>
//         </EuiPage>
//       </EuiProvider>
//   );
// };

// export default Layout;
// import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   RouterProvider,
//   Outlet,
// } from "react-router-dom";
// import {
//   Card,
//   Course,
//   Dat,
//   Login,
//   Outdoor,
//   Session,
//   Teacher,
//   // Trainees,
//   TrainningCar,
// } from "../pages";
// import {
//   EuiPageSidebar,
//   EuiPage,
//   EuiProvider,
//   EuiPageBody,
//   EuiBottomBar,
//   EuiHideFor,
//   EuiPageTemplate,
//   EuiPageSection,
//   EuiPageHeader,
//   EuiDataGrid,
//   EuiButtonIcon,
//   EuiThemeProvider,
// } from "@elastic/eui";
// import { motion } from "framer-motion";
// import SideBar from "../components/Sidebar";
// import Sidebar_test from "../components/Sidebar_test";

// import Header from "../components/Header";
// // import "@elastic/eui/dist/eui_theme_light.css";
// // import "@elastic/eui/dist/eui_theme_dark.css";

// const data = [
//   { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
//   { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
//   { id: 3, name: "Charlie", age: 35, email: "charlie@example.com" },
//   { id: 4, name: "David", age: 40, email: "david@example.com" },
// ];

// // Define the columns for the data grid
// const columns = [
//   { id: "id", displayAsText: "ID" },
//   { id: "name", displayAsText: "Name" },
//   { id: "age", displayAsText: "Age" },
//   { id: "email", displayAsText: "Email" },
// ];

// const Layout = () => {
//   const toggleSide = () => setShowSide(!showSide);
//   const [showSide, setShowSide] = useState("");
//   const [darkMode, setDarkMode] = useState(true);
//   const currentPath = window.location.pathname;
//   const [sideBar, setSidebar] = useState(true);
//   return (
//     <div>
//       <EuiProvider>
//         <EuiPage paddingSize="none">
//           {showSide && (
//             <EuiPageSidebar className="">
//               {/* <SideBar
//                 navIsOpen={showSide}
//                 toggleSide={setShowSide}
//                 onItemClick={(item) => console.log(item)}
//               /> */}
//               {/* <Sidebar_test
//                 navIsOpen={showSide}
//                 toggleSide={setShowSide}
//                 onItemClick={(item) => console.log(item)}
//               /> */}
//               <motion.div
//                 initial={{ x: "-100%" }}
//                 animate={{ x: showSide ? 0 : "-100%" }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Sidebar_test
//                   navIsOpen={showSide}
//                   toggleSide={setShowSide}
//                   onItemClick={(item) => console.log(item)}
//                 />
//               </motion.div>
//             </EuiPageSidebar>
//           )}
//           <EuiPageBody paddingSize="none" panelled={true}>
//             <EuiPageSection bottomBorder={sideBar ? true : "extended"}>
//               <EuiPageHeader>
//                 <Header
//                   toggleSide={toggleSide}
//                   darkMode={darkMode}
//                   setDarkMode={setDarkMode}
//                 />
//               </EuiPageHeader>
//             </EuiPageSection>
//             <EuiPageSection grow>
//               <Outlet />
//             </EuiPageSection>
//             <EuiPageSection grow>
//               <EuiHideFor sizes={["xs", "s"]}>
//                 <EuiBottomBar className="text-white flex space-x-4">
//                   <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
//                   <h3 className="text-xs">
//                     Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
//                     Email: shlx@toanphuong.com.vn{" "}
//                   </h3>
//                 </EuiBottomBar>
//               </EuiHideFor>
//             </EuiPageSection>
//           </EuiPageBody>
//         </EuiPage>
//       </EuiProvider>
//     </div>
//   );
// };

// export default Layout;
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
} from "@elastic/eui";
import { motion } from "framer-motion";
import SideBar from "../components/Sidebar";
import Sidebar_test from "../components/Sidebar_test";
import Header from "../components/Header";

// Define the columns for the data grid
const columns = [
  { id: "id", displayAsText: "ID" },
  { id: "name", displayAsText: "Name" },
  { id: "age", displayAsText: "Age" },
  { id: "email", displayAsText: "Email" },
];

const Layout = () => {
  const toggleSide = () => setShowSide(!showSide);
  const [showSide, setShowSide] = useState(false); // Initialize as boolean for simplicity
  const [darkMode, setDarkMode] = useState(true);
  const currentPath = window.location.pathname;
  const [sideBar, setSidebar] = useState(true);

  return (
    <EuiProvider>
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
            <Outlet/>
        </EuiPageTemplate.Section>
        <EuiPageTemplate.BottomBar
          className="text-white flex space-x-4 h-10"
        >
          <EuiHideFor sizes={["xs", "s"]}>
            <h3 className="text-xs">HỆ THỐNG QUÁN LÝ ĐÀO TẠO LÁI XE</h3>
            <h3 className="text-xs">
              Giải pháp của Toàn Phương SHLX. 0904.666.329 - 0982.911.000.
              Email: shlx@toanphuong.com.vn{" "}
            </h3>
          </EuiHideFor>
        </EuiPageTemplate.BottomBar>
      </EuiPageTemplate>
    </EuiProvider>
  );
};

export default Layout;
