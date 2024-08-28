import React, { useState } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiSelect,
  EuiButton,
  EuiFormRow,
  EuiProvider,
} from "@elastic/eui";

const CourseSearch = ({ onSearch }) => {
  const [ma, setMa] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("-1");

  const options = [
    { value: "-1", text: "Tất cả" },
    { value: "0", text: "Chưa diễn ra" },
    { value: "1", text: "Học lý thuyết" },
    { value: "2", text: "Học thực hành" },
    { value: "3", text: "Kết thúc" },
  ];

  const handleSearch = () => {
    onSearch({ ma, name, status });
  };

  return (
    <EuiProvider>
      <EuiFlexGroup alignItems="center" className="px-8">
        <EuiFlexItem>
          <EuiFormRow label="Mã Khoá">
            <EuiFieldText
              placeholder="Mã Khoá ..."
              value={ma}
              onChange={(e) => setMa(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Tên Khoá">
            <EuiFieldText
              placeholder="Tên Khoá"
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
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem grow={false} className="pt-5">
          <EuiButton fill onClick={handleSearch}>
            Tìm
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
};

export default CourseSearch;
