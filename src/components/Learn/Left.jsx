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

export const part1 = [
  { label: "Phương tiện giao thông" },
  { label: "Quy định tốc độ" },
  { label: "Điều kiện lái xe" },
  { label: "Hành vi bị nghiêm cấm" },
  { label: "Độ tuổi và sức khỏe" },
  { label: "Trách nhiệm bảo trì" },
  { label: "Xử phạt vi phạm" },
];

export const DeploymentsGroup = (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: "normal" }}>PHẦN I: </small> <br />
        <strong>NHỮNG QUY ĐỊNH CƠ BẢN CỦA LUẬT GTĐB</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark"
  >
    <EuiListGroup listItems={deploymentsList} flush />
    <EuiSpacer size="s" />
    <EuiButton fullWidth>Manage deployments</EuiButton>
  </EuiCollapsibleNavGroup>
);

export const SecurityGroup = (
  <EuiCollapsibleNavGroup
    background="light"
    iconType="logoSecurity"
    title="Elastic Security"
    isCollapsible={true}
    initialIsOpen={true}
    arrowDisplay="none"
    extraAction={
      <EuiButtonIcon
        aria-label="Hide and never show again"
        title="Hide and never show again"
        iconType="cross"
      />
    }
  >
    <EuiText size="s" color="subdued" style={{ padding: "0 8px 8px" }}>
      <p>
        Threat prevention, detection, and response with SIEM and endpoint
        security.
        <br />
        <EuiLink>Learn more</EuiLink>
      </p>
    </EuiText>
  </EuiCollapsibleNavGroup>
);

const Left = () => (
  <>
    {DeploymentsGroup}
    <EuiCollapsibleNavGroup
      title="Chương 1: Những quy định chung"
      iconType="training"
      isCollapsible={true}
      initialIsOpen={true}
    >
      <EuiPinnableListGroup
        listItems={part1}
        onPinClick={() => {}}
        maxWidth="none"
        color="subdued"
        gutterSize="none"
        size="s"
      />
    </EuiCollapsibleNavGroup>
    <EuiCollapsibleNavGroup
      title="Chương 2: Những quy định chung"
      iconType="training"
      isCollapsible={true}
      initialIsOpen={true}
    >
      <EuiPinnableListGroup
        listItems={part1}
        onPinClick={() => {}}
        maxWidth="none"
        color="subdued"
        gutterSize="none"
        size="s"
      />
    </EuiCollapsibleNavGroup>
    <EuiCollapsibleNavGroup
      title="Chương 3: Những quy định chung"
      iconType="training"
      isCollapsible={true}
      initialIsOpen={true}
    >
      <EuiPinnableListGroup
        listItems={part1}
        onPinClick={() => {}}
        maxWidth="none"
        color="subdued"
        gutterSize="none"
        size="s"
      />
    </EuiCollapsibleNavGroup>
  </>
);

export default Left;
