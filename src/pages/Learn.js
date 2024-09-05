import React from "react";
import { EuiFlexItem, EuiFlexGroup, EuiPanel } from "@elastic/eui";
import { Left, Middle, Right } from "../components";

const Learn = () => (
  <EuiFlexGroup>
    <EuiFlexItem grow={1}>
      <Left />
    </EuiFlexItem>
    <EuiFlexItem grow={3}>
      <EuiPanel>
        <Middle />
      </EuiPanel>
    </EuiFlexItem>
    <EuiFlexItem grow={1} className="h-screen">
      <EuiPanel>
        <Right />
      </EuiPanel>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default Learn;
