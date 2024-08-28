import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  EuiCollapsibleNav,
  EuiTitle,
  EuiSpacer,
  EuiCollapsibleNavGroup,
  EuiListGroup,
  EuiListGroupItem,
  EuiProvider,
  EuiText, EuiCode
} from "@elastic/eui";

const Sidebar = ({ navIsOpen, toggleSide }) => {
  const [open, setOpen] = useState("");
  const toggleOpen = () => setOpen(!open);
  const hethong = [
    {
      label: "Thiết bị DAT",
      to: "/dat",
      iconType: "calendar",
    },
    {
      label: "Xe tập lái",
      to: "/car",
      iconType: "clock",
    },
    {
      label: "Danh sách thẻ",
      to: "/display/list-group",
      iconType: "compute",
    },
    {
      label: "Danh sách giáo viên",
      to: "/display/list-group",
      iconType: "copyClipboard",
    },
  ];
  const hocvien = [
    {
      label: "Danh sách khoá học",
      to: "/display/list-group",
      iconType: "calendar",
    },
    {
      label: "Danh sách học viên",
      to: "/trainees",
      iconType: "clock",
    },
    {
      label: "Danh sách phiên học",
      to: "/display/list-group",
      iconType: "compute",
    },
    {
      label: "Giám sát thực hành",
      to: "/display/list-group",
      iconType: "copyClipboard",
    },
    {
      label: "Xem dữ liệu",
      to: "/display/list-group",
      iconType: "copyClipboard",
    },
  ];

  return (
    <EuiProvider>
      <EuiCollapsibleNav
        isOpen={navIsOpen}
        size={260}
        onClose={() => toggleSide(false)}
        className=""
      >
        <div style={{ padding: 16 }}>
          <EuiTitle>
            <h2>Navigation</h2>
          </EuiTitle>
          <EuiSpacer />
          <EuiCollapsibleNavGroup
            title="Trang chủ"
            iconType="logoGCPMono"
            iconSize="xxl"
            titleSize="s"
            isCollapsible={true}
            initialIsOpen={true}
            background="light"
          />
          <EuiCollapsibleNavGroup
            title="Hệ thống "
            iconType="logoGCPMono"
            iconSize="xxl"
            titleSize="s"
            isCollapsible={!open}
            initialIsOpen={open}
            background="light"
            forceState={open}
            onClick={() => toggleOpen()}
          >
            <EuiListGroup
              listItems={hethong.map((item) => ({
                label: item.label,
                iconType: item.iconType,
                href: item.to,
                component: (
                  <Link to={item.to} key={item.label}>
                    {item.label}
                  </Link>
                ),
              }))}
              color="primary"
              size="s"
            />
          </EuiCollapsibleNavGroup>
          <EuiCollapsibleNavGroup
            title="Học viên"
            iconType="logoGCPMono"
            iconSize="xxl"
            titleSize="s"
            isCollapsible={false}
            initialIsOpen={true}
            background="light"
          >
            <EuiListGroup
              listItems={hocvien.map((item) => ({
                label: item.label,
                iconType: item.iconType,
                href: item.to,
                component: (
                  <Link to={item.to} key={item.label}>
                    {item.label}
                  </Link>
                ),
              }))}
              color="primary"
              size="s"
            />
          </EuiCollapsibleNavGroup>
          <EuiCollapsibleNavGroup
            title="Nav group"
            iconType="logoGCPMono"
            iconSize="xxl"
            titleSize="s"
            isCollapsible={true}
            initialIsOpen={false}
            background="dark"
          >
            <EuiText size="s">
              <p>
                This is a <EuiCode>dark</EuiCode> <EuiCode>collapsible</EuiCode>{" "}
                group that is initally set to closed,{" "}
                <EuiCode>iconSize=&quot;xxl&quot;</EuiCode> and{" "}
                <EuiCode>titleSize=&quot;s&quot;</EuiCode>.
              </p>
            </EuiText>
          </EuiCollapsibleNavGroup>
          <EuiSpacer />
        </div>
      </EuiCollapsibleNav>
    </EuiProvider>
  );
};

export default Sidebar;
