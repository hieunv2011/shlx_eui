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

const Right = () => (
  <>
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
      title="Thảo luận"
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

export default Right;
