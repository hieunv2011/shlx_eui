import React from "react";
import {
  EuiCollapsibleNavGroup,
  EuiText,
  EuiListGroup,
  EuiListGroupProps,
  EuiPinnableListGroup,
  EuiPinnableListGroupItemProps,
  EuiSpacer,
  EuiButton,
  EuiButtonIcon,
  EuiLink,
} from "@elastic/eui";

const deploymentsList = [
  {
    label: "Giới thiệu",
    iconType: "logoAzureMono",
    size: "s",
  },
  {
    label: "Liên hệ",
    iconType: "logoAWSMono",
    size: "s",
  },
];

export const TopNavLinks = [
  {
    label: "Trang chủ",
    iconType: "home",
    isActive: true,
    pinnable: false,
  },
  { label: "Dashboards", pinned: true },
  { label: "Tài khoản", pinned: true },
  { label: "Cài đặt", pinned: true },
];

export const SystemNavLinks = [
  { label: "Thiết bị DAT", iconType: "consoleApp", href: "/dat" },
  { label: "Xe tập lái", iconType: "visGauge" },
  { label: "Danh sách thẻ", iconType: "editorChecklist" },
  { label: "Danh sách giáo viên", iconType: "training" },
];
export const TraineeNavLinks = [
  { label: "Danh sách khoá học", iconType: "notebookApp", href: "/course" },
  { label: "Danh sách học viên", iconType: "users", href: "/trainees" },
  { label: "Danh sách phiên học", iconType: "tableDensityExpanded" },
  { label: "Giám sát thực hành", iconType: "logRateAnalysis" },
  { label: "Xem dữ liệu", iconType: "dataVisualizer" },
];
export const DeploymentsGroup = (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: "normal" }}>ToanPhuong</small> <br />
        <strong>SÁT HẠCH LÁI XE</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={true}
    background="dark"
  >
    <EuiListGroup listItems={deploymentsList} flush />
    <EuiSpacer size="s" />
  </EuiCollapsibleNavGroup>
);

const Sidebar_test = () => {
  return (
    <>
      {DeploymentsGroup}
      <EuiCollapsibleNavGroup background="light">
        <EuiPinnableListGroup
          listItems={TopNavLinks}
          onPinClick={() => {}}
          maxWidth="none"
          color="text"
          gutterSize="none"
          size="s"
        />
      </EuiCollapsibleNavGroup>
      <EuiCollapsibleNavGroup
        title="HỆ THỐNG"
        iconType="gear"
        isCollapsible={true}
        initialIsOpen={true}
      >
        <EuiPinnableListGroup
          listItems={SystemNavLinks}
          onPinClick={() => {}}
          maxWidth="none"
          color="subdued"
          gutterSize="none"
          size="s"
        />
      </EuiCollapsibleNavGroup>
      <EuiCollapsibleNavGroup
        title="HỌC VIÊN"
        iconType="user"
        isCollapsible={true}
        initialIsOpen={true}
      >
        <EuiPinnableListGroup
          listItems={TraineeNavLinks}
          onPinClick={() => {}}
          maxWidth="none"
          color="subdued"
          gutterSize="none"
          size="s"
        />
      </EuiCollapsibleNavGroup>
    </>
  );
};

export default Sidebar_test;