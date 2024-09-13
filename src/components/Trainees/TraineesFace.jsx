import React, { useState, useEffect, useRef } from "react";
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiButton,
  useGeneratedHtmlId,
  EuiPanel,
  EuiFormRow,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiBasicTable,
  EuiText,
  EuiFilePicker,
} from "@elastic/eui";
import { format } from "date-fns";
import { useAd } from "../../hooks/get";

function TraineesFace({ trainee, isModalVisible, closeModal, traineeId }) {
  // Dữ liệu từ API
  const { data } = useAd();
  const devices = data?.items || [];
  console.log(devices);

  // State quản lý số trang và số lượng hàng mỗi trang
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5); // Mặc định 5 hàng mỗi trang

  // Tính toán các giá trị phân trang
  const paginatedDevices = devices.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  // Hàm xử lý khi thay đổi phân trang
  const onTableChange = ({ page = {} }) => {
    const { index: newPageIndex, size: newPageSize } = page;
    setPageIndex(newPageIndex || 0);
    setPageSize(newPageSize || 5);
  };

  //Selection
  const [selectedDevices, setSelectedDevices] = useState([]);
  const onSelectionChange = (selectedItems) => {
    setSelectedDevices(selectedItems);
  };
  const selection = {
    onSelectionChange: onSelectionChange,
  };

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: devices.length,
    pageSizeOptions: [5, 10, 20], // Lựa chọn số hàng mỗi trang
  };

  // Cột của bảng
  const columns = [
    {
      field: "branch_id",
      name: "Branch ID",
      width: "100px",
    },
    {
      field: "branch_name",
      name: "Branch Name",
    },
    {
      field: "device_name",
      name: "Device Name",
    },
    {
      field: "firmware",
      name: "Firmware",
    },
    {
      field: "customer_name",
      name: "Customer Name",
    },
    {
      field: "created_date",
      name: "Created Date",
      render: (created_date) => format(new Date(created_date), "dd/MM/yyyy"),
    },
  ];

  const modalTitleId = useGeneratedHtmlId();

  //File
  const [files, setFiles] = useState({});
  const [large, setLarge] = useState(true);

  const filePickerId = useGeneratedHtmlId({ prefix: "filePicker" });

  const onChange = (files) => {
    setFiles(files.length > 0 ? Array.from(files) : []);
  };

  const renderFiles = () => {
    if (files.length > 0) {
      return (
        <ul>
          {files.map((file, i) => (
            <li key={i}>
              <strong>{file.name}</strong> ({file.size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>Add some files to see a demo of retrieving from the FileList</p>
      );
    }
  };

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <h2>Đăng ký vân tay</h2>
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody className="">
            <EuiPanel>
              <EuiFlexGroup>
                <EuiImage
                  size="s"
                  hasShadow
                  alt="user"
                  src={trainee.anh_chan_dung}
                />
                <EuiFlexItem>
                  <EuiFormRow label="Họ và tên">
                    <EuiFieldText
                      placeholder={trainee.ho_va_ten}
                      compressed="true"
                      disabled={true}
                      readOnly={true}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Ngày sinh">
                    <EuiFieldText
                      placeholder={format(
                        new Date(trainee.ngay_sinh),
                        "dd/MM/yyyy"
                      )}
                      compressed="true"
                      disabled={true}
                      readOnly={true}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Giới tính">
                    <EuiFieldText
                      placeholder={
                        trainee.gioi_tinh === "F"
                          ? "Nữ"
                          : trainee.gioi_tinh === "M"
                          ? "Nam"
                          : ""
                      }
                      compressed="true"
                      disabled={true}
                      readOnly={true}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Chứng minh thư">
                    <EuiFieldText
                      placeholder={trainee.so_cmt}
                      compressed="true"
                      disabled={true}
                      readOnly={true}
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFilePicker
                    id={filePickerId}
                    multiple
                    initialPromptText="Select or drag and drop multiple files"
                    onChange={onChange}
                    display={large ? "large" : "default"}
                    aria-label="Use aria labels when no actual label is in use"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
            <EuiSpacer size="m" />
            <EuiPanel>
              <EuiText>
                <h3>Files attached</h3>
                {renderFiles()}
              </EuiText>
            </EuiPanel>
            <EuiSpacer size="m" />
            <EuiPanel>
              <EuiBasicTable
                items={paginatedDevices} // Dữ liệu phân trang
                columns={columns} // Cấu trúc cột
                pagination={pagination} // Phân trang
                onChange={onTableChange} // Xử lý thay đổi trang
                selection={selection}
                itemId="branch_id"
              />
            </EuiPanel>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Đóng
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
}

export default TraineesFace;
