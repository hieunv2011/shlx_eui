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

const DatSearch = ({ onSearch, showAddNew }) => {
  // Params Search
  const [name, setName] = useState("");
  const [serial_no, setSerial_no] = useState("");
  const [board_serial, setBoard_serial] = useState("");
  const [status, setStatus] = useState("-1");

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
    { value: 1, label: "Đang hoạt động" },
    { value: 0, label: "Không hoạt động" },
  ];

  // Date picker
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(11, "d"));

  // Trigger tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = { serial_no, board_serial, name, status, startDate, endDate };

    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  return (
    <>
      <EuiFlexGroup alignItems="center" className="px-8">

        <EuiFlexItem>
          <EuiFormRow label="Tên máy">
            <EuiFieldText
              placeholder="Nhập tên máy"
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
          <EuiFormRow label="Số IMEI">
            <EuiFieldText
              placeholder="Nhập số IMEI ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={serial_no}
              onChange={(e) => setSerial_no(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Số IMEI">
            <EuiFieldText
              placeholder="Nhập số IMEI ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={board_serial}
              onChange={(e) => setBoard_serial(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Trạng thái">
            <EuiSelect
              options={options}
              valuet={status}
              onChange={(e) => setStatus(e.target.value)}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
            />
          </EuiFormRow>
        </EuiFlexItem> 

        <EuiFlexItem>
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
        </EuiFlexItem>
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
          Thêm thiết bị
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

export default DatSearch;
