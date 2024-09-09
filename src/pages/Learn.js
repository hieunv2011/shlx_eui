import React from "react";
import { EuiFlexItem, EuiFlexGroup, EuiPanel } from "@elastic/eui";
import { Left, Middle, Right } from "../components";

const Learn = () => (
  <EuiFlexGroup>
    {/* <EuiFlexItem grow={1}>
      <Left />
    </EuiFlexItem> */}
    <EuiFlexItem grow={7}>
      <EuiPanel>
        <Middle />
      </EuiPanel>
    </EuiFlexItem>
    <EuiFlexItem grow={3} className="h-[500px]">
      {/* <EuiPanel> */}
        <Right />
      {/* </EuiPanel> */}
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Learn;
