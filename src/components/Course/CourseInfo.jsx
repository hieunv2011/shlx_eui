import React, { useState, Fragment, useMemo } from "react";
import { EuiButtonIcon } from "@elastic/eui";
import {
  EuiIcon,
  EuiTabs,
  EuiTab,
  EuiSpacer,
  EuiText,
  EuiNotificationBadge,
} from "@elastic/eui";
import CourseCar from "./CourseCar";
import CourseAM from "./CourseAM";
const tabs = [
  {
    id: "cobalt--id",
    name: "Máy điểm danh",
    content: (
      <Fragment>
        <EuiSpacer />
            <CourseAM/>
      </Fragment>
    ),
  },
  {
    id: "dextrose--id",
    name: "Xe tập lái",
    content: (
      <Fragment>
        <EuiSpacer />
            <CourseCar/>
      </Fragment>
    ),
  },
];
const CourseInfo = ({ closeModal,item }) => {
  const [selectedTabId, setSelectedTabId] = useState("cobalt--id");

  const selectedTabContent = useMemo(() => {
    return tabs.find((obj) => obj.id === selectedTabId)?.content;
  }, [selectedTabId]);

  const onSelectedTabChanged = (id) => {
    setSelectedTabId(id);
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <EuiTab
        key={index}
        href={tab.href}
        onClick={() => onSelectedTabChanged(tab.id)}
        isSelected={tab.id === selectedTabId}
        disabled={tab.disabled}
        prepend={tab.prepend}
        append={tab.append}
      >
        {tab.name}
      </EuiTab>
    ));
  };

  return (
    <>
    <div className="bg-white h-fit w-1/2 rounded-md p-20 relative">
      <EuiButtonIcon
        iconType="cross"
        aria-label="Close modal"
        size="m"
        className="absolute top-2 right-2"
        onClick={closeModal}
      />
      <div>CourseInfo</div>
      <h2>Số học sinh: {item?.so_hoc_sinh}</h2>
      <EuiTabs>{renderTabs()}</EuiTabs>
      {selectedTabContent}
    </div>
    </>
  );
};

export default CourseInfo;
