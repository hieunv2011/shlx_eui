import React, { useState } from "react";
import {
  EuiButtonIcon,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiPageHeader,
  EuiText,
  EuiPopover,
  EuiButton,
  EuiProvider,
  EuiHeader,
  EuiSwitch,
} from "@elastic/eui";
import { useMe } from "../hooks/get";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ darkMode, setDarkMode, toggleSide }) => {
  const { data: meData, isLoading, error } = useMe();
  const [popOpen, setPopOpen] = useState(false);
  // const location = useLocation();

  if (isLoading) {
    return <EuiText>Loading...</EuiText>;
  }

  if (error) {
    return <EuiText color="danger">Error loading data</EuiText>;
  }

  let headerLogoText = "";
  const currentPath = window.location.pathname;
  if (currentPath === "/trainees") {
    headerLogoText = "Khoá học";
  } else if (currentPath === "/another-path") {
    headerLogoText = "Another Page";
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
          <EuiHeaderLogo>{headerLogoText}</EuiHeaderLogo>
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <EuiSwitch
            label="Dark Mode"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          <EuiHeaderLinks aria-label="App navigation links example">
            <EuiPopover
              button={<EuiText onClick={togglePopUp}>{meData.name}</EuiText>}
              isOpen={popOpen}
              closePopover={togglePopUp}
            >
              <div>
                <EuiText>
                  <p>Thông tin chi tiết của người dùng.</p>
                </EuiText>
                <EuiButton onClick={togglePopUp}>Đóng</EuiButton>
              </div>
            </EuiPopover>
          </EuiHeaderLinks>
        </EuiHeaderSectionItem>
      </EuiHeader>
    </EuiProvider>
  );
};

export default Header;
