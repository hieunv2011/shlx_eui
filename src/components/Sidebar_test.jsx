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
    label: "combining-binaries",
    iconType: "logoAzureMono",
    size: "s",
  },
  {
    label: "stack-monitoring",
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
  { label: "Thiết bị DAT",iconType: "consoleApp" },
  { label: "Xe tập lái",iconType: "visGauge" },
  { label: "Danh sách thẻ",iconType: "editorChecklist" },
  { label: "Danh sách giáo viên",iconType: "training" },
];
export const TraineeNavLinks = [
  { label: "Danh sách khoá học",iconType: "notebookApp" },
  { label: "Danh sách học viên",iconType:"users" },
  { label: "Danh sách phiên học",iconType:"tableDensityExpanded" },
  { label: "Giám sát thực hành",iconType:"logRateAnalysis" },
  { label: "Xem dữ liệu",iconType:"dataVisualizer" },
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
    initialIsOpen={false}
    arrowDisplay="none"
    background="dark"
  >
    <EuiListGroup listItems={deploymentsList} flush />
    <EuiSpacer size="s" />
    <EuiButton fullWidth>Manage deployments</EuiButton>
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
        isCollapsible={false}
        initialIsOpen={true}
        arrowDisplay="none"
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
        isCollapsible={false}
        initialIsOpen={true}
        arrowDisplay="none"
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
