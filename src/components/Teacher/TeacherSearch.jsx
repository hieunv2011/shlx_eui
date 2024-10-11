import React, { useState, useEffect } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiButton,
  EuiButtonIcon,
  EuiDatePicker,
  EuiDatePickerRange,
  useIsWithinBreakpoints
} from "@elastic/eui";
import { useCourses } from "../../hooks/get";
import moment from "moment";

const TeacherSearch = ({ onSearch, showAddNew }) => {
  // Params Search
  const [name, setName] = useState("");
  const [id_card, setId_card] = useState("");
  const [driving_license_no, setDriving_license_no] = useState("");
  const [teaching_license_no, setTeaching_license_no] = useState("");
  const [synced, setSycned] = useState("-1");

  // Điều chỉnh style cho các input
  const [isCompressed, setCompressed] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  const [isReadOnly, setReadOnly] = useState(false);
  const isMobileView = useIsWithinBreakpoints(["xs", "s"]);
  
  useEffect(() => {
    if (isMobileView) {
      setCompressed(true);
    } else {
      setCompressed(false);
    }
  }, [isMobileView]);

  // Option trạng thái đồng bộ
  const options = [
    { value: -1, label: "Tất cả" },
    { value: 0, label: "Lỗi" },
    { value: 1, label: "Thành công" },
  ];

  // Date picker
//   const [startDate, setStartDate] = useState(moment());
//   const [endDate, setEndDate] = useState(moment().add(11, "d"));

  // Trigger tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = { id_card, driving_license_no,teaching_license_no, name, synced};
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  return (
    <>
      <EuiFlexGroup alignItems="center" className="px-8">

        <EuiFlexItem>
          <EuiFormRow label="Họ và tên">
            <EuiFieldText
              placeholder="Nhập họ và tên"
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="CMT">
            <EuiFieldText
              placeholder="Nhập CMT ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={id_card}
              onChange={(e) => setId_card(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="GPLX">
            <EuiFieldText
              placeholder="Nhập GPLX ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={driving_license_no}
              onChange={(e) => setDriving_license_no(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="GPĐT">
            <EuiFieldText
              placeholder="Nhập GPĐT ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={teaching_license_no}
              onChange={(e) => setTeaching_license_no(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Đồng bộ">
            <EuiSelect
              options={options}
              value={synced}
              onChange={(e) => setSycned(e.target.value)}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
            />
          </EuiFormRow>
        </EuiFlexItem> 

        {/* <EuiFlexItem>
          <EuiFormRow label="Ngày bắt đầu - kết thúc" className="w-80">
            <EuiDatePickerRange
              startDateControl={
                <EuiDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  aria-label="Start date"
                />
              }
              endDateControl={
                <EuiDatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  startDate={startDate}
                  endDate={endDate}
                  aria-label="End date"
                />
              }
            />
          </EuiFormRow>
        </EuiFlexItem> */}
      </EuiFlexGroup>

      <div className="flex flex-row space-x-2 px-8 pt-4 justify-end">
        <EuiButton fill onClick={handleSearch} iconType="search">
          Tìm kiếm
        </EuiButton>
        <EuiButton
          fill
          color="success"
          onClick={showAddNew}
          iconType="addDataApp"
          className="text-white"
        >
          Thêm giáo viên
        </EuiButton>
        <EuiButtonIcon
          display="base"
          iconType="importAction"
          aria-label="Lens"
          size="m"
        />
      </div>
    </>
  );
};

export default TeacherSearch;
