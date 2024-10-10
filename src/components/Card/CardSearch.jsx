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
  EuiDatePickerRange,
  EuiText,
} from "@elastic/eui";
import { useProvinces } from "../../hooks/get";
import moment from "moment";

const CardSearch = ({ onSearch }) => {
  //Params Search
  const [card_num, setCardNum] = useState("");
  const [card_name, setCardName] = useState("");
  const [type, setType] = useState("");
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

  //Option trạng thái
  const options = [
    { value: "-2", text: "Tất cả" },
    { value: "0", text: "Chưa dùng" },
    { value: "1", text: "Đã dùng" },
    { value: "-1", text: "Đã huỷ" },
  ];
  const types = [
    { value: "2", text: "Giáo viên" },
    { value: "1", text: "Học sinh" },
  ];
  //Trigger tìm kiếm
  const handleSearch = () => {
    onSearch({ card_num, card_name, status,type });
  };

  //Date picker
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(11, "d"));

  return (
    <>
      <EuiFlexGroup alignItems="center" className="px-8">
        <EuiFlexItem>
          <EuiFormRow label="ID thẻ">
            <EuiFieldText
              placeholder="Nhập id thẻ ... "
              // prepend={[
              //   <EuiToolTip content="content">
              //     <EuiButtonIcon iconType="key" aria-label="Gear this" />
              //   </EuiToolTip>,
              // ]}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={card_name}
              onChange={(e) => setCardName(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Số thẻ">
            <EuiFieldText
              placeholder="Nhập số thẻ ... "
              // prepend={[
              //   <EuiToolTip content="content">
              //     <EuiButtonIcon iconType="key" aria-label="Gear this" />
              //   </EuiToolTip>,
              // ]}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
              aria-label="Use aria labels when no actual label is in use"
              value={card_num}
              onChange={(e) => setCardNum(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Loại thẻ">
            <EuiSelect
              options={types}
              value={type}
              onChange={(e) => setType(e.target.value)}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Trạng Thái">
            <EuiSelect
              options={options}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              compressed={isCompressed}
              disabled={isDisabled}
              readOnly={isReadOnly}
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

export default CardSearch;
