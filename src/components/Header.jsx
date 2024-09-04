import React, { useState } from "react";
import {
  EuiButtonIcon,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiText,
  EuiPopover,
  EuiButton,
  EuiProvider,
  EuiHeader,
  EuiSwitch,
  EuiButtonEmpty,
  EuiAvatar,
} from "@elastic/eui";
import { useMe } from "../hooks/get";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ darkMode, setDarkMode, toggleSide }) => {
  const { data: meData, isLoading, error } = useMe();
  const [popOpen, setPopOpen] = useState(false);

  // Hàm logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token khỏi localStorage
    window.location.href = "/"; // Điều hướng về trang chủ
  };

  if (isLoading) {
    return <EuiText>Loading...</EuiText>;
  }

  if (error) {
    return <EuiText color="danger">Error loading data</EuiText>;
  }

  let headerLogoText = "";
  const currentPath = window.location.pathname;

  if (currentPath === "/trainees") {
    headerLogoText = "HỌC VIÊN";
  } else if (currentPath === "/another-path") {
    headerLogoText = "Another Page";
  } else if (currentPath === "/card") {
    headerLogoText = "DANH SÁCH THẺ";
  } else if (currentPath === "/course") {
    headerLogoText = "DANH SÁCH KHOÁ HỌC";
  } else if (currentPath === "/dat") {
    headerLogoText = "THIẾT BỊ DAT";
  } else if (currentPath === "/session") {
    headerLogoText = "DANH SÁCH PHIÊN HỌC";
  } else if (currentPath === "/teacher") {
    headerLogoText = "DANH SÁCH GIÁO VIÊN";
  } else if (currentPath === "/trainningcar") {
    headerLogoText = "DANH SÁCH XE TẬP LÁI";
  } else if (currentPath === "/outdoor") {
    headerLogoText = "GIÁM SÁT THỰC HÀNH";
  } else if (currentPath === "/trainees/:course_id") {
    headerLogoText = "Trainees Detail";
  } else {
    headerLogoText = "Default Header Text";
  }

  const togglePopUp = () => setPopOpen(!popOpen);

  return (
    <EuiProvider>
      <EuiHeader className="w-full p-8" bottomBorder={true}>
        <EuiHeaderSectionItem>
          {/* <EuiButtonIcon
            iconType="menu"
            aria-label="Menu"
            size="m"
            color="black"
            onClick={toggleSide}
          /> */}
          <EuiHeaderLogo>{headerLogoText}</EuiHeaderLogo>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiHeaderLinks aria-label="App navigation links example">
            <EuiPopover
              button={
                <span className="flex justify-center items-center space-x-2">
                  <EuiText>{meData.name}</EuiText>
                  <EuiAvatar
                    size="l"
                    name="Cat"
                    imageUrl="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/klee/image.png?strip=all&quality=75&w=256"
                    onClick={togglePopUp}
                  />
                </span>
              }
              isOpen={popOpen}
              closePopover={togglePopUp}
            >
              <div className="w-80">
                <EuiText>Tên người dùng: {meData.name}</EuiText>
                <EuiButtonIcon
                  iconType="cross"
                  aria-label="Close"
                  color="danger"
                  onClick={togglePopUp}
                />
                <EuiButton
                  fill
                  color="danger"
                  iconType={"push"}
                  onClick={handleLogout}
                  size="s"
                >
                  Đăng xuất
                </EuiButton>
              </div>
            </EuiPopover>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeader>
    </EuiProvider>
  );
};

export default Header;
