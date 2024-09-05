import React, { useState } from "react";
import {
  EuiButtonIcon,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiText,
  EuiPopover,
  EuiProvider,
  EuiHeader,
  EuiAvatar,
  EuiButton,
  EuiSpacer,
  EuiIcon,
  EuiNotificationBadge,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { useMe } from "../hooks/get";
import Breadcrumbs from "./Breadcrumbs";
import logo from "../assets/logo.png";
//i18n
const mappings = {
  en: {
    "euiColumnSelector.selectAll": "Hiển thị tất cả",
    "euiColumnSelector.hideAll": "Ẩn tất cả",
    "euiColumnSelector.button": "Lựa chọn dữ liệu hiển thị",
    "euiTablePagination.rowsPerPage": "Số dòng của một trang",
  },
};

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
  const togglePopUp = () => setPopOpen(!popOpen);

  return (
    <EuiProvider>
      <EuiHeader className="w-full p-8" bottomBorder={true}>
        <EuiHeaderSectionItem>
          <EuiButtonIcon
            iconType="menu"
            aria-label="Menu"
            size="m"
            color="black"
            onClick={toggleSide}
          />
          <EuiAvatar
            size="m"
            name="Your Logo Description"
            imageUrl={logo}
            className="mx-2"
          />
          <Breadcrumbs />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiFlexGroup gutterSize="s" alignItems="center" className="mr-9">
            <EuiFlexItem grow={false} style={{ position: "relative" }}>
              {/* Biểu tượng chuông */}
              <EuiIcon type="email" size="l" />
              {/* Số thông báo */}
              <EuiNotificationBadge
                style={{
                  position: "absolute",
                  top: 3,
                  right: 3,
                  transform: "translate(50%, -50%)", // Đặt số thông báo ở góc trên cùng bên phải
                }}
              >
                5
              </EuiNotificationBadge>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup gutterSize="s" alignItems="center" className="mr-9">
            <EuiFlexItem grow={false} style={{ position: "relative" }}>
              {/* Biểu tượng chuông */}
              <EuiIcon type="bell" size="l" />
              {/* Số thông báo */}
              <EuiNotificationBadge
                style={{
                  position: "absolute",
                  top: 3,
                  right: 3,
                  transform: "translate(50%, -50%)", // Đặt số thông báo ở góc trên cùng bên phải
                }}
              >
                5
              </EuiNotificationBadge>
            </EuiFlexItem>
          </EuiFlexGroup>
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
