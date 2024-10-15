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

const TraineesSearch = ({ onSearch }) => {
  // Params Search
  const [name, setName] = useState("");
  const [rf_card_name, setRf_card_name] = useState("");
  const [synced, setSynced] = useState("-1");
  const [course_id, setCourse_id] = useState("");

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

  // Xử lý việc chọn khoá học
  const [proOptions, setProOptions] = useState([]);
  const { data: courses } = useCourses();

  useEffect(() => {
    if (courses) {
      const formattedOptions = courses.items.map((course) => ({
        value: course.id,
        text: course.ten_khoa_hoc,
      }));

      setProOptions([{ value: "", text: "Chọn khóa học" }, ...formattedOptions]);
    }
  }, [courses]);

  // Date picker
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(11, "d"));

  // Trigger tìm kiếm
  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = { rf_card_name, name, synced, course_id, startDate, endDate };

    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, value]) => value !== "")
    );

    onSearch(filteredParams);
  };

  return (
    <>
      <EuiFlexGroup alignItems="center" className="px-8">
        <EuiFlexItem>
          <EuiFormRow label="Tên khoá học">
            <EuiSelect
              options={proOptions}
              value={course_id}
              onChange={(e) => setCourse_id(e.target.value)}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Họ tên / Mã ĐK / Số CMT">
            <EuiFieldText
              placeholder="Nhập họ và tên ..."
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
          <EuiFormRow label="ID thẻ">
            <EuiFieldText
              placeholder="Nhập ID thẻ ..."
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={rf_card_name}
              onChange={(e) => setRf_card_name(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFormRow label="Đồng bộ">
            <EuiSelect
              options={options}
              value={synced}
              onChange={(e) => setSynced(e.target.value)}
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
        <EuiButton
          fill
          color="success"
          onClick={handleSearch}
          iconType="save"
          className="text-white"
        >
          Đồng bộ
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

export default TraineesSearch;
