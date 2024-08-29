import React, { useState, useEffect } from "react";
import {
  EuiProvider,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiButton,
  EuiSwitch,
  EuiSpacer,
  EuiToolTip,
  EuiPopover,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiShowFor,
  useIsWithinBreakpoints,
  EuiDatePicker,
  EuiDatePickerRange
} from "@elastic/eui";
import { useProvinces } from "../hooks/get";
const CourseSearch = ({ onSearch }) => {
  //Params Search
  const [ma, setMa] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("-1");

  //Điều chỉnh style cho các input
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

  //Option trạng thái khoá học
  const options = [
    { value: "-1", text: "Tất cả" },
    { value: "0", text: "Chưa diễn ra" },
    { value: "1", text: "Học lý thuyết" },
    { value: "2", text: "Học thực hành" },
    { value: "3", text: "Kết thúc" },
  ];

  //Trigger tìm kiếm
  const handleSearch = () => {
    onSearch({ ma, name, status });
  };

  //Xử lý việc chọn tỉnh-thành
  const [proOptions, setProOptions] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const { data: provinces } = useProvinces();
  useEffect(() => {
    if (provinces) {
      const formattedOptions = provinces.map((province) => ({
        value: province.id_so,
        text: province.name,
      }));

      setProOptions(formattedOptions);
    }
  }, [provinces]);

  return (
    <>
      <EuiProvider>
        <EuiFlexGroup alignItems="center" className="px-8">
          <EuiFlexItem>
            <EuiFormRow label="Tỉnh/ Thành">
              <EuiSelect
                options={proOptions}
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                prepend={[
                  <EuiToolTip content="content">
                    <EuiButtonIcon
                      iconType="mapMarker"
                      aria-label="Gear this"
                    />
                  </EuiToolTip>,
                ]}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormRow label="Mã Khoá">
              <EuiFieldText
                placeholder="Nhập mã khoá học ... "
                prepend={[
                  <EuiToolTip content="content">
                    <EuiButtonIcon iconType="key" aria-label="Gear this" />
                  </EuiToolTip>,
                ]}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
                aria-label="Use aria labels when no actual label is in use"
                value={ma}
                onChange={(e) => setMa(e.target.value)}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormRow label="Tên Khoá">
              <EuiFieldText
                placeholder="Nhập tên khoá học ... "
                prepend={[
                  <EuiToolTip content="content">
                    <EuiButtonIcon iconType="visText" aria-label="Gear this" />
                  </EuiToolTip>,
                ]}
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
            <EuiFormRow label="Trạng Thái">
              <EuiSelect
                options={options}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                prepend={[
                  <EuiToolTip content="content">
                    <EuiButtonIcon
                      iconType="faceHappy"
                      aria-label="Gear this"
                    />
                  </EuiToolTip>,
                ]}
                compressed={isCompressed}
                disabled={isDisabled}
                readOnly={isReadOnly}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem grow={false} className="pt-5">
            <div className="flex flex-row space-x-2">
              <EuiButton fill onClick={handleSearch} iconType="search">
                Tìm kiếm
              </EuiButton>
              <EuiButton fill color="success" onClick={handleSearch} iconType="save" className="text-white">
                Đồng bộ
              </EuiButton>
              <EuiButtonIcon display="base" iconType="importAction" aria-label="Lens" size="m" />
            </div>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiProvider>
      {/* <EuiFlexGroup responsive={false}>
        <EuiSwitch
          label="compressed"
          checked={isCompressed}
          onChange={(e) => setCompressed(e.target.checked)}
        />
        <EuiSwitch
          label="disabled"
          checked={isDisabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <EuiSwitch
          label="readOnly"
          checked={isReadOnly}
          onChange={(e) => setReadOnly(e.target.checked)}
        />
      </EuiFlexGroup> */}
      <EuiSpacer />
    </>
  );
};

export default CourseSearch;
