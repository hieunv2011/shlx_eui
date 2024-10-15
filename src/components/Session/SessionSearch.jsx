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
  useIsWithinBreakpoints,
  EuiSpacer,
} from "@elastic/eui";
import { useCourses } from "../../hooks/get";
import moment from "moment";
import { render } from "@testing-library/react";

const SessionSearch = ({ onSearch, showAddNew }) => {
  // Params Search
  const [name, setName] = useState("");
  const [serial_no, setSerial_no] = useState("");
  const [board_serial, setBoard_serial] = useState("");
  const [status, setStatus] = useState("-1");
  const [courseStatus, setCourseStatus] = useState("-1");
  const [courseInfo, setCourseInfo] = useState("-1");
  const [sync, setSync] = useState("-1");
  const [mark, setMark] = useState("-1");

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

  // Option trạng thái
  const options = [
    { value: -1, label: "Tất cả" },
    { value: 1, label: "Đang hoạt động" },
    { value: 0, label: "Không hoạt động" },
  ];
  // Option trạng thái đồng bộ
  const syncOptions = [
    { value: -1, label: "Tất cả" },
    { value: 1, label: "Chưa xử lý" },
    { value: 0, label: "Lỗi phiên" },
    { value: 0, label: "Lỗi server" },
    { value: 0, label: "Lỗi đồng bộ" },
    { value: 0, label: "Lỗi thành công" },
  ];
  //TT Khoá học
  const courseStateOptions = [
    { value: -1, label: "Tất cả" },
    { value: 1, label: "Đã bắt đầu" },
    { value: 0, label: "Đang diễn ra" },
    { value: 0, label: "Đang diễn ra gần đây" },
    { value: 0, label: "Đã kết thúc" },
    { value: 0, label: "Đã kết thúc" },
    { value: 0, label: "Đã bị huỷ" },
  ];
  //   Trạng thái khoá học
  const courseInfoOptions = [
    { value: -1, label: "Tất cả" },
    { value: 1, label: "Chưa diễn ra" },
    { value: 0, label: "Học lý thuyết" },
    { value: 0, label: "Học thực hành" },
    { value: 0, label: "Kết thúc" },
  ];
  //đánh dấu
  const markOptions = [
    { value: -1, label: "Tất cả" },
    { value: 1, label: "Đã đánh dấu" },
    { value: 0, label: "Chưa đánh dấu" },
  ];
  // Xử lý việc chọn khoá học
  const [proOptions, setProOptions] = useState([]);
  const { data: courses } = useCourses();

  useEffect(() => {
    if (courses) {
      const formattedOptions = courses.items.map((course) => ({
        value: course.id,
        text: course.ten_khoa_hoc,
      }));

      setProOptions([
        { value: "", text: "Chọn khóa học" },
        ...formattedOptions,
      ]);
    }
  }, [courses]);

  // Date picker
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(11, "d"));

  // Trigger tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = {
      serial_no,
      board_serial,
      name,
      status,
      startDate,
      endDate,
    };

    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  return (
    <>
      <div className="px-8">
        {/* Input */}
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFormRow label="Họ tên/Mã đăng ký/ Số CMT">
              <EuiFieldText
                placeholder="Nhập họ tên/mã đăng ký/số CMT"
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
            <EuiFormRow label="Biển số xe">
              <EuiFieldText
                placeholder="Nhập biển số xe"
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
                placeholder="Nhập số IMEI"
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
        {/* Input */}
        <EuiSpacer />
        {/* Select */}
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFormRow label="TT khoá học">
              <EuiSelect
                options={courseInfoOptions}
                value={courseInfo}
                onChange={(e) => setCourseInfo(e.target.value)}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Khoá học">
              <EuiSelect
                options={proOptions}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Trạng thái">
              <EuiSelect
                options={courseStateOptions}
                value={courseStatus}
                onChange={(e) => setCourseStatus(e.target.value)}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Đồng bộ">
              <EuiSelect
                options={syncOptions}
                value={sync}
                onChange={(e) => setSync(e.target.value)}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFormRow label="Đánh dấu">
              <EuiSelect
                options={markOptions}
                value={mark}
                onChange={(e) => setMark(e.target.value)}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        {/* Select */}
      </div>

      <div className="flex flex-row space-x-2 px-8 pt-4 justify-end">
        <EuiButton fill onClick={handleSearch} iconType="search">
          Tìm kiếm
        </EuiButton>
      </div>
    </>
  );
};

export default SessionSearch;
