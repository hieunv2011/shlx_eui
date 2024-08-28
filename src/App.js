import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
} from "./pages";
import {
  EuiPageSidebar,
  EuiPage,
  EuiProvider,
  EuiPageBody,
  EuiBottomBar,
} from "@elastic/eui";
import { Trainees } from "./pages";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Layout from "./layout/Layout";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/card" element={<Card />} />
            <Route path="/course" element={<Course />} />
            <Route path="/dat" element={<Dat />} />
            <Route path="/session" element={<Session />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/trainees" element={<Trainees />} />
            <Route path="/trainees/:course_id" element={<Trainees />} />
            <Route path="/trainningcar" element={<TrainningCar />} />
            <Route path="/outdoor" element={<Outdoor />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
